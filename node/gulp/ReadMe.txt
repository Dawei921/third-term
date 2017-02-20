一、node-demo
1.简单示例
2.处理HTTP请求产响应
3.用户登陆
运行： 控制台到达指定的文件目录下，输入 node test01.js


二、npm-demo
1.使用npm本地安装bootstrap，安装到当前目录下
步骤：
1.1在当前项目路径下创建node_modules目录 
安装包会放在./node_modules目录下
1.2安装bootstrap包
执行命令：npm install bootstrap
1.3安装指定版本的包
执行命令：npm install bootstrap@4.0.0-alpha.6
1.4卸载bootstrap
执行命令：npm uninstall bootstrap

2.全局安装bootstrap，安装到/usr/local/lib目录下
执行命令：sudo npm install bootstrap -g

3.初始化package.json，为项目添加配置文件
执行命令：npm init，根据提示输入信息
也可执行命令：npm init --yes，使用默认配置

安装包的同时将依赖信息添加到package.json中
npm install swiper --save
npm install less --save-dev

根据package.json文件自动下载安装项目依赖包
npm install

4.使用淘宝 NPM 镜像
sudo npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install bootstrap --save
cnpm uninstall bootstrap --save


三、bower-demo
1.安装Bower
sudo cnpm install -g bower
2.使用Bower安装软件包
bower install jquery
bower install bootstrap
3.初始化bower.json，类似于npm的package.json
bower init

















