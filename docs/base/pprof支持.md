## pprof 支持
在 golang 官方包中有一个 pprof 包专门用来做性能分析；
该工具能方便的对我们的程序进行 内存，goroutine，cpu 进行分析；
使用该包时会有几个 http 接口暴露出来；
为了接入方便，Orange 框架已经进行了封装，通过配置文件即可开启或关闭性能分析接口。

### 快速使用
通过该配置可以进行配置性能分析接口的开启与关闭；
~~~
[app]
  ...
    pprofOpen = true
~~~

功能开启后，我们启动项目，可以通过访问 [http://127.0.0.1:8088/debug/pprof/](http://127.0.0.1:8088/debug/pprof/) 来查看性能分析页面；
通过 go tool 工具还能将相关的性能指标生成 svg 查看；

### 分析接口
CPU 分析：http://127.0.0.1.1:8088/debug/pprof/profile
Goroutine 阻塞事件：http://127.0.0.1.1:8088/debug/pprof/block
活跃的 Goroutine：http://127.0.0.1.1:8088/debug/pprof/goroutine
堆内存分类分析：http://127.0.0.1.1:8088/debug/pprof/heap
互斥锁分析：http://127.0.0.1.1:8088/debug/pprof/mutex
系统线程分析：http://127.0.0.1.1:8088/debug/pprof/threadcreate

### 生成 svg
通过如下命令可以将 cpu 分析结果保持到一个 svg 文件中
```
go tool pprof -svg -output ./cpu.svg http://127.0.0.1.1:8088/debug/pprof/profile
```
说明：默认情况下 cup 分析会监控30s内的 cpu 使用情况，还可以通过在接口后面添加参数来配置时间，如果分析 60s 如下：

```
go tool pprof -svg -output ./cpu.svg http://127.0.0.1.1:8088/debug/pprof/profile?seconds=60
```

另外，也可以将相应的分析结果源文件保存到本地后进行svg生成，以实现自动化程序调用等功能。
例如，我们将 http://127.0.0.1.1:8088/debug/pprof/profile 地址请求到的文件保存到本地 ./profile 文件，然后我们可以通过如下命令来转换成 svg 格式
```
go tool pprof -svg -output ./profile .svg ./profile 
```

