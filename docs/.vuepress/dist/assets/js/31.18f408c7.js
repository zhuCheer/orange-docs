(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{382:function(t,a,e){"use strict";e.r(a);var n=e(42),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"快速开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),e("h2",{attrs:{id:"单文件方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单文件方式"}},[t._v("#")]),t._v(" 单文件方式")]),t._v(" "),e("p",[t._v("单文件版本可以快速启动 Orange 框架构建一个简单的 http 服务，")]),t._v(" "),e("p",[t._v("第一步：在 GOPATH 目录下创建一个目录 demo，并在目录中创建一个 main.go，写入代码：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('package main\n\nimport "gitee.com/zhucheer/orange/app"\n\nfunc main(){\n   router := &Route{}\n   app.AppStart(router)\n}\n\ntype Route struct {\n}\n\nfunc (s *Route) ServeMux() {\n   app.NewRouter("").GET("/", func(ctx *app.Context) error {\n      return ctx.ToString("Hello world!")\n   })\n}\n\nfunc (s *Route) Register() {\n}\n')])])]),e("p",[t._v("第二步：安装依赖\n如果  go 版本小于 1.13")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("window 下在 cmd 中执行：\nset GO111MODULE=on\nset  GOPROXY=https://goproxy.cn\n\n\nlinux  下执行：\nexport GO111MODULE=on\nexport GOPROXY=https://goproxy.cn\n")])])]),e("p",[t._v("如果 go 版本大于等于 1.13")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("go env -w GOPROXY=https://goproxy.cn,direct\n")])])]),e("p",[t._v("然后在项目目录下面执行命令")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(">  go mod init // 初始化go mod 包管理\n>  go mod tidy // 加载依赖包\n>  go mod vendor // 将依赖包拷贝到项目目录中去\n>  go run main.go\n")])])]),e("p",[t._v("以该方式启动仅作为演示或调试时使用，如果需要利用 Orange 构建一个 Web 服务产品，还请使用脚手架方式构建项目；")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"脚手架方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚手架方式"}},[t._v("#")]),t._v(" 脚手架方式")]),t._v(" "),e("p",[t._v("通过脚手架方式安装 Orange 可以生成一个完整的 mvc 目录结构，通过该方式可以构建一个完整的 http 服务项目。")]),t._v(" "),e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("blockquote",[e("p",[t._v("下载项目\n"),e("code",[t._v("go get gitee.com/zhucheer/orange")])])]),t._v(" "),e("h3",{attrs:{id:"创建一个新项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建一个新项目"}},[t._v("#")]),t._v(" 创建一个新项目")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(">  orange create project // 命令执行后将会在GOPATH/src目录下生成项目\n")])])]),e("p",[t._v("如果出现  orange 命令不存报错在则需要将 GOBIN 添加到环境变量。")]),t._v(" "),e("h3",{attrs:{id:"启动项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动项目"}},[t._v("#")]),t._v(" 启动项目")]),t._v(" "),e("ul",[e("li",[t._v("通过 go mod 管理相关依赖, 如果 go 版本小于 1.12 需要手动开启 go mod 功能；")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("window 下在 cmd 中执行：set GO111MODULE=on\nlinux  下执行：export GO111MODULE=on\n")])])]),e("ul",[e("li",[t._v("go1.13版本环境通过配置env开启 go mod ，还需要添加代理配置;")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//开启go mod\ngo env -w GO111MODULE="on"\n// 添加国内代理\ngo env -w GOPROXY=https://goproxy.cn,direct\n')])])]),e("ul",[e("li",[t._v("进入项目目录后依次执行下面的命令")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(">  go mod init // 初始化go mod 包管理\n>  go mod tidy // 加载依赖包\n>  go mod vendor // 将依赖包拷贝到项目目录中去\n>  go run main.go [--config=config/config.toml] //启动项目 默认配置参数可以忽略，如配置文件位置改变可通过参数指定。\n")])])]),e("h3",{attrs:{id:"打包项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包项目"}},[t._v("#")]),t._v(" 打包项目")]),t._v(" "),e("p",[t._v("配置好GOBIN环境变量，进入项目目录，然后执行如下命令：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> window： `orange.exe build`\n> linux：`orange build`\n> 打包命令默认会将程序打包到 build 目录下，打包好的程序可以直接运行，不依赖 golang 环境。\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);