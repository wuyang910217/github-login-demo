#### 说明

Meteor 提供的accounts-ui包，样式固定，不管我们有没有自己的账户系统，如果要集成`Github`登录，
可以自己实现`Github账户登录`这个按钮，并且可以控制`Meteor.users`中的用户信息格式，来与数据库的已有格式保存一致或者获取自己想要的用户信息。

#### 配置

+ 添加如下包：
```
  meteor add accounts-ui
  meteor add accounts-password
  meteor add accounts-github
  meteor add service-configuration
```
+ **注意** accounts-ui这个包是为了对比，实际中不需要。
+  运行`meteor`，浏览器中进入`localhost:3000`观察测试。


