通常的业务需求都会有请求http服务的需求，包括数据爬虫、接口服务请求等等，该工具能提供一个高效易用的http请求客户端，支持 cookie 保持，能方便的实现模拟登陆请求，链式操作方便进行参数配置。

## 快速开始

通过如下方式，能快速发送一个 GET 请求
~~~
client:=httpclient.NewClient()
resp,_:=client.RunGet("http://www.baidu.com")
~~~

## POST 请求

通过如下方式，能快速发送一个 POST 请求
~~~
client:=httpclient.NewClient()
resp,_:=client.RunPost("http://www.baidu.com")
~~~

通常情况下 POST 请求都会有请求参数，通过如下方式添加 POST 参数
### 方法1
使用 `FormParams` 方法配置一个 `map[string]interface{}` 参数；
默认 Orange 会以 `application/x-www-form-urlencoded` 的方式发送 POST 请求；
通过 `WithJsonRequest` / `WithFormRequest` 方法可以修改请求头中的文档类型；
~~~
client:=httpclient.NewClient()
resp,_:=client.FormParams(map[string]interface{}{
   "auth":123,
}).RunPost("http://127.0.0.1/test.php?s=1")

// 以json的方式发送请求，会将post转换成 {"auth":123}
resp,_:=client.WithJsonRequest().FormParams(map[string]interface{}{
   "auth":123,
}).RunPost("http://127.0.0.1/test.php?s=1")

// 以表单提交的方式发送请求
resp,_:=client.WithJsonRequest().FormParams(map[string]interface{}{
   "auth":123,
}).RunPost("http://127.0.0.1/test.php?s=1")

~~~



### 方法2
一种更为灵活的方法来发送 POST 参数；
~~~
// 通过 ContentType 配置请求头文档类型
client:=httpclient.NewClient().ContentType("application/json")

// 通过 WithBody 添加请求 Body 中的信息
resp,_:=client.WithBody(`{"auth":123}`).RunPost("http://127.0.0.1/test.php?s=1")
~~~



## 更多配置

### cookie 保持
通过 `WithCookie` 链式方法能像浏览器一样保持 cookie 解决模拟登陆抓包 session/cookie 问题；
注意：每一次调用 `httpclient.NewClient()` 相当于新创建一个浏览器，cookie 保持需要使用同一个 `httpclient.NewClient()` 返回的对象进行操作。

~~~
client:=httpclient.NewClient().WithCookie()
resp,_: = client.RunGet("http://www.baidu.com")

resp,_ = client.RunGet("http://www.baidu.com/login")
~~~


### 设置超时时间
Orange 框架中默认配置的请求超时时间是 10s 可以通过 `SetTimeout` 链式操作进行配置；
~~~
// 设置 3s 的超时时间
client:=httpclient.NewClient().SetTimeout(3)
resp,_:=client.RunGet("http://www.baidu.com")
~~~


### 设置请求头
通过 `Header` 链式操作配置请求头信息；
~~~
client:=httpclient.NewClient().Header("auth", "123")
resp,_:=client.RunGet("http://www.baidu.com")
~~~

## 响应

Orange 请求接口返回的是一个响应结构体，里面包含原始响应数据，执行时间，等信息；

~~~
client:=httpclient.NewClient()
resp,_:=client.RunGet("http://www.baidu.com")

// 获取原始 *http.Response
fmt.Println(resp.BodyRaw)

// 获取响应内容字符类型
fmt.Println(resp.String())

// 获取响应内容 byte 类型
fmt.Println(resp.Body)

// 获取 cookie 信息
fmt.Println(resp.CookieData)

// 获取请求执行时间
fmt.Println(resp.GetRequestTime())


~~~




