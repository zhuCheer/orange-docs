## 介绍
Orange 连接 redis 同样使用了连接池，可以配置连接池相关参数，redis 操作通过 gorm 包实现，对 mysql 增删改操作简单方便。
## Redis 配置

```
[database] 
    initCap = 2 #数据库连接池 初始化连接数
    maxCap = 5 #数据库连接池 最大连接数，超过次数后连接则实时生成实时关闭，类似php短链接
    idleTimeout = 5 # 连接空闲释放时间
    [database.redis]
        [database.redis.default] #redis配置，可以配置多个，默认名称default
            addr = "192.168.137.100:6379"
            password = ""
            dbnum = 5
```

## 获取 Redis 操作对象
```
//获取一个 Redis 操作对象，参数是配置中对应的名称
db, put, err := database.GetRedis("default")

//连接使用完成后记得将连接放回连接池，否则会造成连接池耗尽大量产生短链接等问题
defer  database.PutConn(put) 
```
##   Redis 操作
- 获取到的操作对象即是 redigo 对象，可以直接按照 redigo包的使用方法进行操作；
- redigo 包地址 [https://github.com/gomodule/redigo](https://github.com/gomodule/redigo)
- redigo  文档地址 [https://godoc.org/github.com/gomodule/redigo/redis](https://godoc.org/github.com/gomodule/redigo/redis)

## Redis 命令执行
~~~
rdx, put, err := database.GetRedis("default")
defer  database.PutConn(put) 

_, err = rdx.Do("HSET", "cacheKey", "fieldName", "value_xxx")
~~~
