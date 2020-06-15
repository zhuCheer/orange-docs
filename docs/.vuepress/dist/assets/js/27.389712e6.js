(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{381:function(a,t,e){"use strict";e.r(t);var n=e(42),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("Orange 内置了文件上传模块，通过简单配置就能快速进行文件上传操作。")]),a._v(" "),e("h3",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('[app]\n   ...\n    [app.upload]\n        storage = "./storage/allimg" //文件存放路径\n        maxSize = 2096157 // 文件大小限制\n        ext = ["jpg"] //文件格式过滤\n')])])]),e("h3",{attrs:{id:"上传操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传操作"}},[a._v("#")]),a._v(" 上传操作")]),a._v(" "),e("p",[a._v("上传请求请将表单类型配置成 "),e("code",[a._v("multipart/form-data")])]),a._v(" "),e("h4",{attrs:{id:"上传并自动存储到本地"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传并自动存储到本地"}},[a._v("#")]),a._v(" 上传并自动存储到本地")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// 在控制器方法中添加如下代码\nfunc Upload(c *app.Context) error {\n    \n   // 文件表单名称 file\n  // path 返回的是文件存储的相对路径\n   path, err := c.AppUpload("file")\n\n   if err != nil {\n      return c.ToString(err.Error())\n   }\n\n   return c.ToJson(map[string]interface{}{\n      "info": "upload success",\n      "path": path,\n   })\n}\n')])])]),e("h4",{attrs:{id:"上传并返回数据对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传并返回数据对象"}},[a._v("#")]),a._v(" 上传并返回数据对象")]),a._v(" "),e("p",[a._v("很多时候我们上传后的文件不希望直接存储到本地，比如我们希望将文件发送到阿里云 / 腾讯云对象存储，图片鉴别等服务，我们可以通过如下方法获取上传后的文件 byte 数据，然后我们可以使用 byte 数据进行我们的业务操作。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// 在控制器方法中添加如下代码\nfunc Upload(c *app.Context) error {\n    \n   // 文件表单名称 file\n  // fileInfo 返回的是文件上传成功后的一个结构体数据\n   fileInfo, err := c.AppUploadToData("file")\n\n   if err != nil {\n      return c.ToString(err.Error())\n   }\n\n   //  获取文件 byte 数据\n   fileByte := fileInfo.FileByte\n   ...\n}\n\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);