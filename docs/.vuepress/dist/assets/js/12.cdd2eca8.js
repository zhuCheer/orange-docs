(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{361:function(t,e,p){"use strict";p.r(e);var r=p(42),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,p=t._self._c||e;return p("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[p("h2",{attrs:{id:"pprof-支持"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#pprof-支持"}},[t._v("#")]),t._v(" pprof 支持")]),t._v(" "),p("p",[t._v("在 golang 官方包中有一个 pprof 包专门用来做性能分析；\n该工具能方便的对我们的程序进行 内存，goroutine，cpu 进行分析；\n使用该包时会有几个 http 接口暴露出来；\n为了接入方便，Orange 框架已经进行了封装，通过配置文件即可开启或关闭性能分析接口。")]),t._v(" "),p("h3",{attrs:{id:"快速使用"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#快速使用"}},[t._v("#")]),t._v(" 快速使用")]),t._v(" "),p("p",[t._v("通过该配置可以进行配置性能分析接口的开启与关闭；")]),t._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[t._v("[app]\n  ...\n    pprofOpen = true\n")])])]),p("p",[t._v("功能开启后，我们启动项目，可以通过访问 "),p("a",{attrs:{href:"http://127.0.0.1:8088/debug/pprof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:8088/debug/pprof/"),p("OutboundLink")],1),t._v(" 来查看性能分析页面；\n通过 go tool 工具还能将相关的性能指标生成 svg 查看；")]),t._v(" "),p("h3",{attrs:{id:"分析接口"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#分析接口"}},[t._v("#")]),t._v(" 分析接口")]),t._v(" "),p("p",[t._v("CPU 分析：http://127.0.0.1.1:8088/debug/pprof/profile\nGoroutine 阻塞事件：http://127.0.0.1.1:8088/debug/pprof/block\n活跃的 Goroutine：http://127.0.0.1.1:8088/debug/pprof/goroutine\n堆内存分类分析：http://127.0.0.1.1:8088/debug/pprof/heap\n互斥锁分析：http://127.0.0.1.1:8088/debug/pprof/mutex\n系统线程分析：http://127.0.0.1.1:8088/debug/pprof/threadcreate")]),t._v(" "),p("h3",{attrs:{id:"生成-svg"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#生成-svg"}},[t._v("#")]),t._v(" 生成 svg")]),t._v(" "),p("p",[t._v("通过如下命令可以将 cpu 分析结果保持到一个 svg 文件中")]),t._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[t._v("go tool pprof -svg -output ./cpu.svg http://127.0.0.1.1:8088/debug/pprof/profile\n")])])]),p("p",[t._v("说明：默认情况下 cup 分析会监控30s内的 cpu 使用情况，还可以通过在接口后面添加参数来配置时间，如果分析 60s 如下：")]),t._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[t._v("go tool pprof -svg -output ./cpu.svg http://127.0.0.1.1:8088/debug/pprof/profile?seconds=60\n")])])]),p("p",[t._v("另外，也可以将相应的分析结果源文件保存到本地后进行svg生成，以实现自动化程序调用等功能。\n例如，我们将 http://127.0.0.1.1:8088/debug/pprof/profile 地址请求到的文件保存到本地 ./profile 文件，然后我们可以通过如下命令来转换成 svg 格式")]),t._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[t._v("go tool pprof -svg -output ./profile .svg ./profile \n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);