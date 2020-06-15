(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{373:function(e,t,r){"use strict";r.r(t);var a=r(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"路由"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[e._v("#")]),e._v(" 路由")]),e._v(" "),r("h2",{attrs:{id:"介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),r("p",[e._v("Orange 框架中的路由接管了 http 包中的路由查找，提供了路由群组，表达式路由等多种策略，提高了灵活性；存储模型参考了 Echo 框架，采用了类似 Radix tree 的多路查找树模型，有较好的路由查找效率，尤其在有大量表达式路由时相比正则匹配优势比较明显；同时也能很好的解决哈希存储的哈希冲突问题。")]),e._v(" "),r("h2",{attrs:{id:"使用说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用说明"}},[e._v("#")]),e._v(" 使用说明")]),e._v(" "),r("p",[e._v("路由文件默认在 http/routes.go 中声明。\n路由定义需要通过结构体实现 "),r("code",[e._v("app.AppSrv")]),e._v(" 接口，即接口体中需要有 "),r("code",[e._v("func (s *Route) ServeMux()")]),e._v(" 和 "),r("code",[e._v("func (s *Route) Register()")]),e._v("  方法。")]),e._v(" "),r("p",[e._v("ServeMux 方法用户定义路由信息，Register方法用于初始化启动自定义服务，和 init 方法的区别是，Register方法在框架相关组件加载完成后再执行，避免了一些空指针的情况。")]),e._v(" "),r("h2",{attrs:{id:"定义路由组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#定义路由组"}},[e._v("#")]),e._v(" 定义路由组")]),e._v(" "),r("p",[e._v("通过路由组可以定义有相同前缀url和执行相同中间件的一类路由；\n通过 "),r("code",[e._v('groupName := app.GroupRouter("/api", NewMiddleWare1(), NewMiddleWare2)')]),e._v(" 来实现；")]),e._v(" "),r("h2",{attrs:{id:"路由定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#路由定义"}},[e._v("#")]),e._v(" 路由定义")]),e._v(" "),r("ul",[r("li",[e._v("定义GET请求  "),r("code",[e._v('groupName .GET("/upload", controller.Upload)')])]),e._v(" "),r("li",[e._v("定义POST请求  "),r("code",[e._v('groupName .POST("/upload", controller.Upload)')])]),e._v(" "),r("li",[e._v("定义接受所有请求  "),r("code",[e._v('groupName .ALL("/upload", controller.Upload)')])])]),e._v(" "),r("h3",{attrs:{id:"静态路由"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#静态路由"}},[e._v("#")]),e._v(" 静态路由")]),e._v(" "),r("p",[e._v("静态路由是定义一个固定的访问地址，需url和路由信息完全匹配；\n如："),r("code",[e._v('groupName .GET("/upload", controller.Upload)')]),e._v("，访问时 url 必须是 /upload；")]),e._v(" "),r("h3",{attrs:{id:"表达式-参数路由"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#表达式-参数路由"}},[e._v("#")]),e._v(" 表达式-参数路由")]),e._v(" "),r("p",[e._v("参数路由会将定义的参数设置成变量，匹配到相应格式即可；\n如："),r("code",[e._v('groupName .GET("/userinfo/:uid", controller.UserInfo)')]),e._v(" ，访问时 url 是 /userinfo/1，/userinfo/2， /userinfo/199 等等；")]),e._v(" "),r("h3",{attrs:{id:"表达式-全匹配路由"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#表达式-全匹配路由"}},[e._v("#")]),e._v(" 表达式-全匹配路由")]),e._v(" "),r("p",[e._v("类似与模糊匹配，url 只需要前缀一致即可匹配；\n如："),r("code",[e._v('groupName .GET("/userhome/*", controller.UserHome)')]),e._v("\n访问时 url 是 /userhome/001，/userhome/001/find， /userinfo/get/101 等等，后面多个斜线也都能匹配上；")]),e._v(" "),r("h3",{attrs:{id:"匹配优先级"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#匹配优先级"}},[e._v("#")]),e._v(" 匹配优先级")]),e._v(" "),r("p",[e._v("在多种路由同时定义时，可能会出现模糊匹配覆盖其他类型的情况，我们定义了一套符合常理的优先级；\n静态路由 > 参数路由 > 全匹配路由")]),e._v(" "),r("h2",{attrs:{id:"路由注入"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#路由注入"}},[e._v("#")]),e._v(" 路由注入")]),e._v(" "),r("p",[e._v("在项目入口文件中，将路由结构体传入app启动方法，如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("\n\nfunc main() {\n\n   router := &http.Route{}\n   app.AppStart(router)\n\n}\n\n")])])]),r("h2",{attrs:{id:"完整示例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#完整示例"}},[e._v("#")]),e._v(" 完整示例")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('package http\n\nimport (\n   "gitee.com/zhucheer/orange/app"\n   "gitee.com/zhucheer/orange/project/http/controller"\n   "gitee.com/zhucheer/orange/project/http/middleware"\n)\n\ntype Route struct {\n}\n\nfunc (s *Route) ServeMux() {\n   commonGp := app.GroupRouter("")  // 定义一个路由组 commonGp\n   {\n      commonGp.GET("/", func(ctx *app.Context) error { //  commonGp 路由组下的一个 GET 请求类型路由 / \n         return ctx.ToJson(map[string]interface{}{"data": "orange framework"})\n      })\n\n      commonGp.ALL("/upload", controller.Upload)  //  commonGp 路由组下的一个所有请求类型路由 /upload \n   }\n\n   //  定义路由组 authGp 该路由组会执行一个中间件 Auth \n   authGp := app.GroupRouter("/auth", middleware.NewAuth())\n   {\n      authGp.ALL("/info", controller.AuthCheck) // 定义 authGp  路由组下所有请求类型路由 /auth/info\n   }\n\n}\n\n\nfunc (s *Route) Register() {\n}\n\n')])])])])}),[],!1,null,null,null);t.default=o.exports}}]);