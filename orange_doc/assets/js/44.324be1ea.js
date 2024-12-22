(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{366:function(t,e,a){"use strict";a.r(e);var n=a(25),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("通常的业务需求都会有请求http服务的需求，包括数据爬虫、接口服务请求等等，该工具能提供一个高效易用的http请求客户端，支持 cookie 保持，能方便的实现模拟登陆请求，链式操作方便进行参数配置。")]),t._v(" "),a("h2",{attrs:{id:"快速开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),a("p",[t._v("通过如下方式，能快速发送一个 GET 请求")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('client:=httpclient.NewClient()\nresp,_:=client.RunGet("http://www.baidu.com")\n')])])]),a("h2",{attrs:{id:"post-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-请求"}},[t._v("#")]),t._v(" POST 请求")]),t._v(" "),a("p",[t._v("通过如下方式，能快速发送一个 POST 请求")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('client:=httpclient.NewClient()\nresp,_:=client.RunPost("http://www.baidu.com")\n')])])]),a("p",[t._v("通常情况下 POST 请求都会有请求参数，通过如下方式添加 POST 参数")]),t._v(" "),a("h3",{attrs:{id:"方法1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法1"}},[t._v("#")]),t._v(" 方法1")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("FormParams")]),t._v(" 方法配置一个 "),a("code",[t._v("map[string]interface{}")]),t._v(" 参数；\n默认 Orange 会以 "),a("code",[t._v("application/x-www-form-urlencoded")]),t._v(" 的方式发送 POST 请求；\n通过 "),a("code",[t._v("WithJsonRequest")]),t._v(" / "),a("code",[t._v("WithFormRequest")]),t._v(" 方法可以修改请求头中的文档类型；")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('client:=httpclient.NewClient()\nresp,_:=client.FormParams(map[string]interface{}{\n   "auth":123,\n}).RunPost("http://127.0.0.1/test.php?s=1")\n\n// 以json的方式发送请求，会将post转换成 {"auth":123}\nresp,_:=client.WithJsonRequest().FormParams(map[string]interface{}{\n   "auth":123,\n}).RunPost("http://127.0.0.1/test.php?s=1")\n\n// 以表单提交的方式发送请求\nresp,_:=client.WithJsonRequest().FormParams(map[string]interface{}{\n   "auth":123,\n}).RunPost("http://127.0.0.1/test.php?s=1")\n\n')])])]),a("h3",{attrs:{id:"方法2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法2"}},[t._v("#")]),t._v(" 方法2")]),t._v(" "),a("p",[t._v("一种更为灵活的方法来发送 POST 参数；")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// 通过 ContentType 配置请求头文档类型\nclient:=httpclient.NewClient().ContentType("application/json")\n\n// 通过 WithBody 添加请求 Body 中的信息\nresp,_:=client.WithBody(`{"auth":123}`).RunPost("http://127.0.0.1/test.php?s=1")\n')])])]),a("h2",{attrs:{id:"更多配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多配置"}},[t._v("#")]),t._v(" 更多配置")]),t._v(" "),a("h3",{attrs:{id:"cookie-保持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-保持"}},[t._v("#")]),t._v(" cookie 保持")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("WithCookie")]),t._v(" 链式方法能像浏览器一样保持 cookie 解决模拟登陆抓包 session/cookie 问题；\n注意：每一次调用 "),a("code",[t._v("httpclient.NewClient()")]),t._v(" 相当于新创建一个浏览器，cookie 保持需要使用同一个 "),a("code",[t._v("httpclient.NewClient()")]),t._v(" 返回的对象进行操作。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('client:=httpclient.NewClient().WithCookie()\nresp,_: = client.RunGet("http://www.baidu.com")\n\nresp,_ = client.RunGet("http://www.baidu.com/login")\n')])])]),a("h3",{attrs:{id:"设置超时时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置超时时间"}},[t._v("#")]),t._v(" 设置超时时间")]),t._v(" "),a("p",[t._v("Orange 框架中默认配置的请求超时时间是 10s 可以通过 "),a("code",[t._v("SetTimeout")]),t._v(" 链式操作进行配置；")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// 设置 3s 的超时时间\nclient:=httpclient.NewClient().SetTimeout(3)\nresp,_:=client.RunGet("http://www.baidu.com")\n')])])]),a("h3",{attrs:{id:"设置请求头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置请求头"}},[t._v("#")]),t._v(" 设置请求头")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("Header")]),t._v(" 链式操作配置请求头信息；")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('client:=httpclient.NewClient().Header("auth", "123")\nresp,_:=client.RunGet("http://www.baidu.com")\n')])])]),a("h2",{attrs:{id:"响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应"}},[t._v("#")]),t._v(" 响应")]),t._v(" "),a("p",[t._v("Orange 请求接口返回的是一个响应结构体，里面包含原始响应数据，执行时间，等信息；")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('client:=httpclient.NewClient()\nresp,_:=client.RunGet("http://www.baidu.com")\n\n// 获取原始 *http.Response\nfmt.Println(resp.BodyRaw)\n\n// 获取响应内容字符类型\nfmt.Println(resp.String())\n\n// 获取响应内容 byte 类型\nfmt.Println(resp.Body)\n\n// 获取 cookie 信息\nfmt.Println(resp.CookieData)\n\n// 获取请求执行时间\nfmt.Println(resp.GetRequestTime())\n\n\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);