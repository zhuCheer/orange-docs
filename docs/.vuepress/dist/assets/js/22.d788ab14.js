(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{373:function(s,e,n){"use strict";n.r(e);var t=n(42),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),n("p",[s._v("系统提供了 session 管理和操作的支持，面向存储接口开发，目前内置两种存储驱动 redis 和 cookie，存储的 session 数据都会进行 aes 加密；\n通过配置项和对是否开启 session，session 存储驱动，超时时间进行配置")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('...\n [app.session]\n        isOpen = true #是否开启session\n        driver = "cookie" # 存储驱动类型 redis 或 cookie\n        timeout = 1800 #session超时时间 单位：秒\n...\n')])])]),n("h2",{attrs:{id:"快速使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速使用"}},[s._v("#")]),s._v(" 快速使用")]),s._v(" "),n("p",[s._v("通过控制器的 app.Context 参数进行 session 操作，如下")]),s._v(" "),n("h3",{attrs:{id:"session-定义赋值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#session-定义赋值"}},[s._v("#")]),s._v(" session 定义赋值")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('func ControllerXXX(c *app.Context) error {\n   sessionValue:=c.Session().Set("key"， "session value")\n...\n}\n')])])]),n("h3",{attrs:{id:"session-获取"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#session-获取"}},[s._v("#")]),s._v(" session 获取")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('func ControllerXXX(c *app.Context) error {\n   sessionValue:=c.Session().Get("key")\n...\n}\n')])])]),n("h3",{attrs:{id:"session-删除"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#session-删除"}},[s._v("#")]),s._v(" session 删除")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('func ControllerXXX(c *app.Context) error {\n   sessionValue:=c.Session().Delete("key")\n...\n}\n')])])]),n("h3",{attrs:{id:"其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),n("p",[s._v("session 存储通过 encoding/gob 包进行编码，因该包使用时需要将存储类型提前注册；\n因此使用时，如果存储的 session 数据是一个自定义结构类型则需要在程序启动时将改类型进行注册；\n否则在程序重启时将无法重现读取到之前存储的 session 信息；\n示例如下：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('type AdminUser struct {\n    Id        int32\n    Username  string\n    Password  string\n}\n\n// 初始化\nfunc init(){\n   \n    // 初始化注册自定义结构类型\n    gob.Register(AdminUser{})\n\n\n}\n\n\n// 登录设置session\nfunc LoginDo(c *app.Context) error {\n\n   userInfo:=AdminUser{Id:2,Username:"admin"}\n   c.Session().Set("USERLOGIN", userInfo)\n\n}\n\n\n\n')])])])])}),[],!1,null,null,null);e.default=a.exports}}]);