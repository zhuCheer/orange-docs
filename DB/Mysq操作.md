## 介绍
Orange 连接 mysql 使用了连接池，可以配置连接池相关参数，mysql 操作通过 gorm 包实现，对 mysql 增删改操作简单方便。
## Mysql 配置

```
[database] 
    initCap = 2 #数据库连接池 初始化连接数
    maxCap = 5 #数据库连接池 最大连接数，超过次数后连接则实时生成实时关闭，类似php短链接
    idleTimeout = 5 # 连接空闲释放时间
    debug = true # 是否开启debug，可显示mysql执行的sql语句
    [database.mysql]
        [database.mysql.default] #mysql配置，可以配置多个，默认名称default
            addr = "192.168.137.100:3306"
            username = "root"
            password = "123456"
            dbname = "weixin"
```

## 获取数据库操作对象
```
//获取一个mysql操作对象，参数是配置中对应的名称
db, put, err := database.GetMysql("default")

//连接使用完成后记得将连接放回连接池，否则会造成连接池耗尽大量产生短链接等问题
defer  database.PutConn(put) 
```

##  数据库操作
- 获取到的操作对象即是 gorm 对象，可以直接按照 gorm 包的使用方法进行操作；
- gorm 包地址 [http://gorm.book.jasperxu.com/database.html#dbc](http://gorm.book.jasperxu.com/database.html#dbc)

### 创建
```
db, put, err := database.GetMysql("default")
defer  database.PutConn(put) 

user := User{Name: "Jinzhu", Age: 18, Birthday: time.Now()}
db.NewRecord(user) // => 主键为空返回`true`

db.Create(&user)
```
### 查询
~~~
db, put, err := database.GetMysql("default")
defer  database.PutConn(put) 

// 获取第一个匹配记录
db.Table("users").Where("name = ?", "jinzhu").First(&user)
//// SELECT * FROM users WHERE name = 'jinzhu' limit 1;

// 获取所有匹配记录
db.Table("users").Where("name = ?", "jinzhu").Find(&users)
//// SELECT * FROM users WHERE name = 'jinzhu';
~~~
### 更新

~~~
db, put, err := database.GetMysql("default")
defer  database.PutConn(put) 

// 更新单个属性（如果更改）
db.Table("users").Update("name", "hello")
//// UPDATE users SET name='hello', updated_at='2013-11-17 21:34:10' WHERE id=111;

// 使用组合条件更新单个属性
db.Table("users").Where("active = ?", true).Update("name", "hello")
//// UPDATE users SET name='hello', updated_at='2013-11-17 21:34:10' WHERE id=111 AND active=true;

// 使用`map`更新多个属性，只会更新这些更改的字段
db.Table("users").Updates(map[string]interface{}{"name": "hello", "age": 18, "actived": false})
//// UPDATE users SET name='hello', age=18, actived=false, updated_at='2013-11-17 21:34:10' WHERE id=111;

// 使用`struct`更新多个属性，只会更新这些更改的和非空白字段
db.Table("users").Updates(User{Name: "hello", Age: 18})
//// UPDATE users SET name='hello', age=18, updated_at = '2013-11-17 21:34:10' WHERE id = 111;

// 警告:当使用struct更新时，FORM将仅更新具有非空值的字段
// 对于下面的更新，什么都不会更新为""，0，false是其类型的空白值
db.Table("users").Updates(User{Name: "", Age: 0, Actived: false})
~~~


### 删除
~~~
db, put, err := database.GetMysql("default")
defer  database.PutConn(put) 

db.Table("users").Where("email LIKE ?", "%jinzhu%").Delete(Email{})
//// DELETE from emails where email LIKE "%jinhu%";

db.Table("users").Delete(Email{}, "email LIKE ?", "%jinzhu%")
//// DELETE from emails where email LIKE "%jinhu%";
~~~
