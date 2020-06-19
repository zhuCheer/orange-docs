module.exports = {
  title: 'Orange框架',
  description: 'orange框架,简洁高效的web开发框架, Golang用户极速开发体验。',
  base : '/orange_doc/',
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
   head: [
    ['meta', {description:'orange框架,简洁高效的web开发框架, Golang用户极速开发体验。'}],
    ['link', { rel: 'icon', href: '/images/logo.jpg' }],
	['script', {}, `
            var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "https://hm.baidu.com/hm.js?a0c745d027acbd6848330c087669dc94";
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();`
    ]
  ],
  themeConfig : {
	logo: '/images/logo.jpg',
	smoothScroll: true,
	
	sidebar: [
		['/快速开始.md','快速开始'],
		['/config/配置.md','配置'],
		['/log/日志.md','日志'],
		['/config/命令行参数.md','命令行参数'],
		{
			title: '请求与响应',
			collapsable: false,
			children: [
				{ title: '路由', path:'/route/路由.md'},
				{ title: '中间件', path:'/route/中间件.md'},
				{ title: '控制器', path:'/controller/控制器.md'},
				{ title: 'Session', path:'/request/Session.md'}
			]
		},
		{
			title: '数据库',
			collapsable: false,
			children: [
				{ title: 'Mysq操作', path:'/DB/Mysq操作.md'},
				{ title: 'Redis操作', path:'/DB/Redis操作.md'}
			]
		},
		['/view.md','视图'],
		{
			title: '其他',
			collapsable: false,
			children: [
				{ title: '项目目录', path:'/base/项目目录.md'},
				{ title: '项目编译', path:'/base/项目编译.md'},
				{ title: '优雅退出', path:'/base/优雅退出.md'},
				{ title: '平滑重启', path:'/base/平滑重启.md'},
				{ title: 'pprof支持', path:'/base/pprof支持.md'}
			]
		},
		{
			title: '实用工具',
			collapsable: false,
			children: [
				{ title: '图片验证码', path:'/tools/图片验证码.md'},
				{ title: '简单队列', path:'/tools/简单队列.md'},
				{ title: '消息队列', path:'/tools/消息队列.md'},
				{ title: 'http请求客户端', path:'/tools/http请求客户端.md'},
				{ title: '文件上传', path:'/tools/文件上传.md'},
				{ title: '发送邮件', path:'/tools/发送邮件.md'}
			]
		},
	],
    nav : [
        { text: '首页', link: '/' },
        { text: '快速开始', link: '/快速开始.md' },
        { text: '文档', link: '/about.md' },
		{ text: '看云镜像', link: 'https://www.kancloud.cn/chase688/orange_framework' },
		{ text: '源码', link: 'https://gitee.com/zhucheer/orange' }
    ],
	
  }
}
