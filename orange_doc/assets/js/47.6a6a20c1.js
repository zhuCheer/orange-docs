(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{371:function(e,t,s){"use strict";s.r(t);var n=s(25),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"消息队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息队列"}},[e._v("#")]),e._v(" 消息队列")]),e._v(" "),s("p",[e._v("在日常业务开发需求中，经常会用到消息队列 rocketmq，nsq，kafka等工具来完成诸如排队，秒杀，异步处理等业务；")]),e._v(" "),s("p",[e._v("为了能让我们方便快捷的接入各种消息队列，Orange框架对日常使用的队列生产/队列消费进行了封装，基于接口进行实现，无论使用何种消息队列，都只是一个配置的问题；")]),e._v(" "),s("p",[e._v("领导说用rocketmq我们就用rocketmq，领导说换成redis，我们就给他换成redis，完全不慌，极大简化接入成本；😁😁😁")]),e._v(" "),s("h2",{attrs:{id:"组件说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件说明"}},[e._v("#")]),e._v(" 组件说明")]),e._v(" "),s("ul",[s("li",[e._v("组件基于接口实现，不同的消息队列通过配置文件指定")]),e._v(" "),s("li",[e._v("目前支持了 rocketmq、redis驱动；")])]),e._v(" "),s("h2",{attrs:{id:"配置说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置说明"}},[e._v("#")]),e._v(" 配置说明")]),e._v(" "),s("p",[e._v("如下是完整的配置选项：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('[queue]\n    driver="redis" // rocketmq 或 redis\n    retry=2 // 重试次数\n    endpoints=["192.168.1.1:6379"] // brocker 或 redis 服务地址，当用redis驱动是只用填一个主库地址即可\n    passwd="123456" // redis驱动专属配置，redis密码\n    redisdb=4 // redis驱动专属配置，redis库编号\n    timeout=3600 // redis专属配置，队列超时时间(s) ，当队列一直没有被消费到达超时时间则队列会被销毁\n')])])]),s("h2",{attrs:{id:"使用指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用指南"}},[e._v("#")]),e._v(" 使用指南")]),e._v(" "),s("h3",{attrs:{id:"注册生产者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册生产者"}},[e._v("#")]),e._v(" 注册生产者")]),e._v(" "),s("ul",[s("li",[e._v("通过如下代码注册生产者并向队列发送一条消息；")]),e._v(" "),s("li",[e._v("参数说明，注册方法 "),s("code",[e._v("NewProducer")]),e._v(" 需要传入队列 group 名称；")]),e._v(" "),s("li",[e._v("消息发送方法 "),s("code",[e._v("SendMsg")]),e._v(" 需要指定消息队列 topic 名称和消息体内容；")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('client, _:= queue.NewProducer("test")\nret, err := client.SendMsg("test-topic", "Hello World！")\n')])])]),s("h3",{attrs:{id:"注册消费者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册消费者"}},[e._v("#")]),e._v(" 注册消费者")]),e._v(" "),s("p",[e._v("消费者采用的是监听并执行回调方法的模式实现，注册好消费者后，程序会持续地监听队列并消费数据；")]),e._v(" "),s("p",[e._v("和生产者一样，消费者方法 "),s("code",[e._v("NewConsumer")]),e._v(" 需要传入队列 group 名称；")]),e._v(" "),s("p",[e._v("消费者消息监听方法 "),s("code",[e._v("ListenReceiveMsgDo")]),e._v(" 传入消息 topic 和一个消息处理的回调方法，接受到消息后的处理逻辑都放在该回调方法中即可完成消费流程；")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('client, _ := queue.NewConsumer("test")\n\nclient.ListenReceiveMsgDo("test", func(mqMsg queue.MqMsg) {\n   fmt.Println("recive===>", mqMsg, mqMsg.BodyString())\n})\n')])])]),s("h3",{attrs:{id:"完整示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整示例"}},[e._v("#")]),e._v(" 完整示例")]),e._v(" "),s("ul",[s("li",[e._v("先准备好一个redis服务作为示例")]),e._v(" "),s("li",[e._v("在 GOPATH 下创建一个demo目录，目录中创建两个文件 main.go, config.toml;")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('main.go\n------------------\npackage main\n\nimport (\n   "gitee.com/zhucheer/orange/app"\n   "gitee.com/zhucheer/orange/queue"\n   "fmt"\n)\n\nfunc main(){\n   router := &Route{}\n   app.AppStart(router)\n}\n\ntype Route struct {\n}\n\nfunc (s *Route) ServeMux() {\n   app.NewRouter("").GET("/", func(ctx *app.Context) error {\n   \n     client, _ := queue.NewProducer("test")\n\n     ret, _ := client.SendMsg("test", "hello mq producer!")\n   \n      return ctx.ToJson(ret)\n   })\n}\n\nfunc (s *Route) Register() {\n\n\n   client, _ := queue.NewConsumer("test")\n   client.ListenReceiveMsgDo("test", func(mqMsg queue.MqMsg) {\n      fmt.Println("recive msg===>", mqMsg.BodyString())\n   })\n\n}\n')])])]),s("p",[e._v("在配置文件中添加好对应的redis服务信息")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('config.toml\n------------------\n[queue]\n    driver="redis"\n    retry=2\n    endpoints=["192.168.1.1:6379"]\n    passwd="123456"\n    redisdb=4\n    timeout=3600\n')])])]),s("p",[e._v("最后拉取依赖并执行（开启 go moduls）")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("go mod init\ngo mod tidy\ngo run main.go --config=config.toml\n\n")])])]),s("p",[e._v("程序启动后访问 http://127.0.0.1:8088/ 即可看到生产和消费的过程；")])])}),[],!1,null,null,null);t.default=r.exports}}]);