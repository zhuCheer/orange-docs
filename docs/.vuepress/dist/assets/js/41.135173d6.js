(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{369:function(e,a,r){"use strict";r.r(a);var t=r(25),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"快速使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快速使用"}},[e._v("#")]),e._v(" 快速使用")]),e._v(" "),r("blockquote",[r("p",[e._v("Orange 框架中间件是一个用来过滤进入应用 HTTP 请求的工具。可以通过它来方便实现登陆状态校验，权限校验，CSRF验证等等。")])]),e._v(" "),r("p",[e._v("实例化中间件以参数形式传递到路由组参数进行申明，该路由组下所有路由将依次执行中间件方法；")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('app.GroupRouter("/api", NewMiddleWare1(), NewMiddleWare2())` \n')])])]),r("h3",{attrs:{id:"内置中间件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内置中间件"}},[e._v("#")]),e._v(" 内置中间件")]),e._v(" "),r("h4",{attrs:{id:"限速中间件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#限速中间件"}},[e._v("#")]),e._v(" 限速中间件")]),e._v(" "),r("p",[e._v("实例化限速中间件 "),r("code",[e._v("throttle.NewThrottle(maxQps, breakTime, ipSplit)")])]),e._v(" "),r("ul",[r("li",[e._v("maxQps：触发限速 qps ，当请求达到配置的 qps 数值，后续请求直接返回429错误；")]),e._v(" "),r("li",[e._v("breakTime：当触发限速后等待指定时长才能正常访问；")]),e._v(" "),r("li",[e._v("ipSplit ： 限速是否按 ip 来源区分，true 是， false 否， 按 ip 来源区分，则请求 qps 会根据各个 ip 分别计算，否则直接计算所有请求qps；")])]),e._v(" "),r("p",[e._v("相关代码调用：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('import (\n   "gitee.com/zhucheer/orange/app"\n   "gitee.com/zhucheer/orange/middlewares/throttle"\n\n)\n...\n\nrateGp :=app.NewRouter("/rate", throttle.NewThrottle(5, time.Minute, true))\n...\n')])])]),r("h4",{attrs:{id:"csrf校验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#csrf校验"}},[e._v("#")]),e._v(" CSRF校验")]),e._v(" "),r("p",[e._v("orange 框架已经全局集成 CSRF 校验，通过配置进行开启或关闭，开启后，全局所有 POST 请求都将进行 CSRF校验；")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[app]\n    ...\n    csrfVerify = true # 开启校验\n")])])]),r("p",[e._v("通过控制器 context 参数获取 CSRF-TOKEN，如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('func ControllerFunc(c *app.Context) error {\n\n   c.ResponseHeader().Set("Content-Type", "application/text")\n   return c.ToString(c.CsrfToken)\n}\n')])])]),r("h3",{attrs:{id:"异常捕获"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异常捕获"}},[e._v("#")]),e._v(" 异常捕获")]),e._v(" "),r("p",[e._v("在 golang 中如遇到严重的异常或 BUG，往往会导致程序出现 panic 报错，当出现 panic 后程序会终止后续处理，因此我们也无法获取自定义日志等信息，通常我们会通过 defer 和 recover() 来捕获 panic 异常，该内置中间件就是完成 panic 捕获并记录日志的功能；\n使用方法：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('import (\n   "gitee.com/zhucheer/orange/app"\n   "gitee.com/zhucheer/orange/middlewares/exception"\n)\n...\n\nrateGp :=app.NewRouter("/rate", exception.NewPanicReader())\n...\n')])])]),r("p",[e._v("注册该中间件后，在web请求中如出现 panic 后页面会输出 500 错误，并且日志会记录一个 Critiacal 级别的错误，我们通过日志可以获取到对应异常具体信息。")]),e._v(" "),r("h3",{attrs:{id:"自定义中间件定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自定义中间件定义"}},[e._v("#")]),e._v(" 自定义中间件定义")]),e._v(" "),r("p",[e._v("中间件都放在 middleware 目录下，可以参考内置中间件进行开发；")]),e._v(" "),r("p",[e._v("下面是一个请求 header 头状态检测中间件示例：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('package middleware\n\nimport (\n   "fmt"\n   "gitee.com/zhucheer/orange/app"\n)\n\ntype VerifyHeader struct {\n}\n\nfunc NewVerifyHeader () *VerifyHeader {\n   return &VerifyHeader {}\n}\n\n// Func implements Middleware interface.\nfunc (w VerifyHeader ) Func() app.MiddlewareFunc {\n   return func(next app.HandlerFunc) app.HandlerFunc {\n      return func(c *app.Context) error {\n       \n        // 状态验证逻辑\n         fmt.Println("VerifyHeader middleware")\n         if c.Request().Header.Get("auth") == "" {\n           c.ResponseWrite([]byte("header verify middleware break"))\n           return errors.New("header verify middleware break")\n         }\n         return next(c)\n\n      }\n   }\n}\n\n...\n\n// routes.go\napp.GroupRouter("/api", middleware.NewVerifyHeader())` \n\n\n')])])])])}),[],!1,null,null,null);a.default=n.exports}}]);