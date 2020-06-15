## 概述
系统提供了 session 管理和操作的支持，面向存储接口开发，目前内置两种存储驱动 redis 和 cookie，存储的 session 数据都会进行 aes 加密；
通过配置项和对是否开启 session，session 存储驱动，超时时间进行配置
~~~
...
 [app.session]
        isOpen = true #是否开启session
        driver = "cookie" # 存储驱动类型 redis 或 cookie
        timeout = 1800 #session超时时间 单位：秒
...
~~~

## 快速使用

通过控制器的 app.Context 参数进行 session 操作，如下
### session 定义赋值
~~~
func ControllerXXX(c *app.Context) error {
   sessionValue:=c.Session().Set("key"， "session value")
...
}
~~~

### session 获取
~~~
func ControllerXXX(c *app.Context) error {
   sessionValue:=c.Session().Get("key")
...
}
~~~


### session 删除
~~~
func ControllerXXX(c *app.Context) error {
   sessionValue:=c.Session().Delete("key")
...
}
~~~


### 其他

session 存储通过 encoding/gob 包进行编码，因该包使用时需要将存储类型提前注册；
因此使用时，如果存储的 session 数据是一个自定义结构类型则需要在程序启动时将改类型进行注册；
否则在程序重启时将无法重现读取到之前存储的 session 信息；
示例如下：

```
type AdminUser struct {
    Id        int32
    Username  string
    Password  string
}

// 初始化
func init(){
   
    // 初始化注册自定义结构类型
    gob.Register(AdminUser{})


}


// 登录设置session
func LoginDo(c *app.Context) error {

   userInfo:=AdminUser{Id:2,Username:"admin"}
   c.Session().Set("USERLOGIN", userInfo)

}



```
