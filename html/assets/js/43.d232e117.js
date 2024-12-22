(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{364:function(t,e,a){"use strict";a.r(e);var n=a(25),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"静态资源绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资源绑定"}},[t._v("#")]),t._v(" 静态资源绑定")]),t._v(" "),a("p",[t._v("我们的网站项目中常常会包含诸如 js img等静态资源，Orange 框架提供了静态资源绑定的能力，能构建一个静态资源文件服务；")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("ASSETS")]),t._v(" 路由方法即可绑定一个本地目录实现文件服务；\n该方法有三个参数")]),t._v(" "),a("p",[a("code",[t._v('ASSETS("访问url", "目录地址", 显示文件目录列表 app.AutoIndex / 禁止显示目录列表 DirDeny)')])]),t._v(" "),a("h3",{attrs:{id:"代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),a("p",[t._v("通过如下代码即可将本地stroage目录绑定，访问 http://localhost:8088/storage 即可看到对应的文件列表")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('commonGp := app.NewRouter("/")\ncommonGp .ASSETS("/storage", "./storage", app.AutoIndex)\n')])])]),a("p",[t._v("完整代码：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('package main\n\nimport "gitee.com/zhucheer/orange/app"\n\nfunc main(){\n   router := &Route{}\n   app.AppStart(router)\n}\n\ntype Route struct {\n}\n\nfunc (s *Route) ServeMux() {\n   app.NewRouter("").GET("/", func(ctx *app.Context) error {\n      return ctx.ToString("Hello world!")\n   })\n   app.NewRouter("").ASSETS("/storage", "./storage", app.AutoIndex)\n}\n\nfunc (s *Route) Register() {\n}\n')])])]),a("h3",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("p",[t._v("该静态资源绑定只是作为一个在特定环境下的兜底能力，目前还无法拥有类似Nginx，Apache一样的的负载均衡，反向代理等能力；")]),t._v(" "),a("p",[t._v("如在生产环境实现一个文件服务，建议使用更为专业的Web服务器，如Nginx。")])])}),[],!1,null,null,null);e.default=r.exports}}]);