(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{358:function(e,t,n){"use strict";n.r(t);var a=n(25),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"配置使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置使用"}},[e._v("#")]),e._v(" 配置使用")]),e._v(" "),n("h2",{attrs:{id:"初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[e._v("#")]),e._v(" 初始化")]),e._v(" "),n("p",[e._v("应用启动时会自动初始化配置全局变量，通过 "),n("code",[e._v("cfg.Config")]),e._v(" 即可使用配置相关方法。")]),e._v(" "),n("h2",{attrs:{id:"如何使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[e._v("#")]),e._v(" 如何使用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('~~~\nimport (\n   "gitee.com/zhucheer/orange/cfg"\n)\n~~~\n\n\n~~~\nfunc main() {\n   configVal:= cfg.Config.GetString("app.name")\n\n}\n~~~\n')])])]),n("h2",{attrs:{id:"配置方法说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置方法说明"}},[e._v("#")]),e._v(" 配置方法说明")]),e._v(" "),n("ul",[n("li",[e._v("获取字符串类型配置 "),n("code",[e._v("cfg.Config.GetString(key)")])]),e._v(" "),n("li",[e._v("获取 int  类型配置 "),n("code",[e._v("cfg.Config.GetInt(key)")])]),e._v(" "),n("li",[e._v("获取 int64 类型配置 "),n("code",[e._v("cfg.Config.GetInt64(key)")])]),e._v(" "),n("li",[e._v("获取 bool 类型配置 "),n("code",[e._v("cfg.Config.GetBool(key)")])]),e._v(" "),n("li",[e._v("获取 time 类型配置 "),n("code",[e._v("cfg.Config.GetDuration(key)")])]),e._v(" "),n("li",[e._v("获取 int 数组类型配置 "),n("code",[e._v("cfg.Config.GetSliceInt(key)")])]),e._v(" "),n("li",[e._v("获取 int64 数组类型配置 "),n("code",[e._v("cfg.Config.GetSliceInt64(key)")])]),e._v(" "),n("li",[e._v("获取字符串数组类型配置 "),n("code",[e._v("cfg.Config.GetSliceString(key)")])]),e._v(" "),n("li",[e._v("获取 map 类型配置 "),n("code",[e._v("cfg.Config.GetMap(key)")])]),e._v(" "),n("li",[e._v("获取 interface{} 类型配置 "),n("code",[e._v("cfg.Config.ParseNode(key)")]),e._v(" 通过此方法能自定义获取上述配置方法中没有的类型")])])])}),[],!1,null,null,null);t.default=i.exports}}]);