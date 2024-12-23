# 视图

## 介绍
Orange 的视图基于官方 `html/template` 和 `text/template` 包，基本用法也和官方包一致；
控制器 app.Context 和 view 包进行交互，http 渲染输出由 app.Context 中的方法处理，具体渲染模版替换由 view 包进行处理。

## 模版定义
视图包含应用的 HTML，并且将控制器 / 应用程序逻辑与演示逻辑分开。视图文件默认存放于 `storage/views` 目录下所有`.tpl`后缀的文件中，存放目录具体配置可以在 `config/config/toml` 中进行调整。
```
[app]
...
viewPath = "./storage/views"
```


一个简单的视图如下所示：
```
<!-- 此视图文件位置： storage/views/hello.tpl -->

<html>
    <body>
        <h1>Hello, {{.Name}}</h1>
    </body>
</html>

```

在控制器中通过 `app.Context` 中的 `ViewHtml` 或 `ViewText` 方法进行渲染；
~~~
func ViewShow(c *app.Context) error {
   showData := struct {
      Name string
   }{
      Name : "world!",
   }
   return c.ViewHtml("hello", showData)
}
~~~

当然，视图文件也可以嵌套在 storage/views 目录的子目录中。「点」符号可以用来引用嵌套视图；如果你的视图存储在 storage/views/home/index.tpl，则可以这样引用它：
```
return c.ViewHtml("home.index", showData)
```
## 向视图传递数据
如上述例子所示，你可以使用结构体对象将数据传递到视图：
```
return c.ViewHtml("home.index", showData)
```
此方式传递数据时，作为第二个参数的数据必须是结构体类型或 map[string]interface{} 类型；

## 获取渲染内容
有些时候我们不想直接输出模板内容，而是希望对内容再进行一些处理后输出，可以直接调用 view 包中的方法获取模板渲染后的内容。
~~~
import "gitee.com/zhucheer/orange/view"
...
tmpl := view.ContextTmpl(viewName).Assigns(viewData)
htmlRes, err := tmpl.Render()
~~~
该方法直接获取模版渲染后内容字符串，处理逻辑有可开发人员自行处理，更新灵活。

## 模版引入
有些时候我们在定义模版时有些部分是可以共用的，比如后台中的 header footer 部分模版可以将公共的部分拆分出来定义成一个个单独的模板文件，在需要的地方进行 include 处理；
完成该功能需要2步：
1.定义引入模板
我们拆分出来的模板放到视图目录（views/），如下：
我们定义一个公用的样式模板，放到 ./views/baseStyle.tpl 下；
定义引入模版时需要添加 define 标记
~~~
{{define "baseStyle"}}
<style>
    .redTitle{ font-size: 18px; color:#ff0000;}
</style>
{{end}}
~~~
然后我们在 控制器或中间件中将该模板进行申明：
~~~
func ActionName(c *app.Context) error {
    c.AddIncludeTmpl("baseStyle")
}
~~~

2.模板引入
我们在渲染模板时，将该公用的样式引入通过如下标记：
~~~
{{template "baseStyle" .}}
~~~


## 模版引擎
模板引擎基于官方包[html/template](https://studygolang.com/static/pkgdoc/pkg/html_template.htm) 和 [text/template](https://studygolang.com/static/pkgdoc/pkg/text_template.htm) 语法操作也是一样。

### 变量替换
~~~
func ViewShow(c *app.Context) error {
   showData := struct {
      Name string
   }{
      Name : "world!",
   }
   return c.ViewHtml("hello", showData)
}


...
视图文件：

<html>
    <body>
        <h1>Hello, {{.Name}}</h1>
    </body>
</html>
~~~


视图文件中的 `{{`.Name`}}` 将会替换成 `world!`

### 系统变量
目前包如下系统变量：

`{{`.CSRF_TOKEN`}}` 表单提交 csrf_token 数据
`{{`.REQUEST_REFERER`}}` 页面请求来源数据




### 原样输出
`ViewHtml` 方法会对变量中的 html 内容进行转义防止 js 注入等安全问题，如果我们在确保安全的情况下希望原样输出 html 内容，可以使用模版内置函数进行处理；

```
<html>
    <body>
        <h1>Hello, `{{`.Name | unescaped}}</h1>
    </body>
</html>
```
### 模板注释
~~~
{{/* a comment */}}
注释，执行时会忽略，可以多行；注释不能嵌套，并且必须紧贴分界符始止，就像这里表示的一样。
~~~


### if 条件判断
最简单的bool类型和字符串类型的判断

```
{{if .condition}}  
{{end}}  
```
当.condition为bool类型的时候，则为true表示执行，当.condition为string类型的时候，则非空表示执行。

**else if嵌套用法**

```
{{if .condition1}}  
{{else if .contition2}}  
{{end}}
```
**eq 等于**

```
{{if eq .var1 .var2}}  
{{end}}
```

**ne 不等于**

```
{{if ne .var1 .var2}}  
{{end}}
```


**lt 小于 (less than)**

```
{{if lt .var1 .var2}}  
{{end}}
```

**le 小于等于**

```
{{if le .var1 .var2}}  
{{end}}
```

**gt 大于**

```
{{if gt .var1 .var2}}  
{{end}}
```

**ge 大于等于**

```
{{if ge .var1 .var2}}  
{{end}}
```

### 循环遍历
template 还支持 range 循环来遍历 map、slice 内的内容，在模板内定义变量需要加上`$`符号
语法为：

```
{{range $i,$v := .slice}}  
{{end}}
```


~~~
showData := struct {
   ItemArr  []int
}{
   ItemArr:  []int{1, 2, 3, 4, 5},
}
return c.ViewHtml("home.index", showData)
...
<ul>
{{range $i, $v: = .ItemArr}}
<li>list item {{$i}}=>{{$v}}</li>
{{end}}
</ul>
~~~
