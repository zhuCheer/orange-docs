(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{381:function(e,a,n){"use strict";n.r(a);var t=n(42),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"队列介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#队列介绍"}},[e._v("#")]),e._v(" 队列介绍")]),e._v(" "),n("p",[e._v("这是 orange 内置的一个简单队列服务，可用于小规模的异步处理，基于 golang list.List 数据类型。")]),e._v(" "),n("h2",{attrs:{id:"使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[e._v("#")]),e._v(" 使用方法")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 新建一个队列\nqueueHandler := queue.NewQueue()\n\n// 向队列压入一个数据 队列左边/右边\n// 数据都会被转换成 interface{} 类型\nqueueHandler.LPush(data)\nqueueHandler.RPush(data)\n\n// 从队列 左边/右边 弹出一个数据\ndata:=queueHandler.LPop()\ndata:=queueHandler.RPop()\n\n// 将 interface{} 类型转换成对应的数据类型使用\ndataVal:=data.(string)\n\n// 查询队列长度\nqueueLen:= queueHandler.Len()\n\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);