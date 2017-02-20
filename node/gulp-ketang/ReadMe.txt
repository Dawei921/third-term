一、node-demo
1.简单示例
2.处理HTTP请求产响应
3.用户登陆


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


四、gulp-demo
1.安装gulp
sudo npm install gulp -g
npm init
npm install gulp --save-dev

2.基本使用
步骤：
2.1创建gulpfile.js文件
2.2定义任务
2.3启动任务
执行命令：gulp 任务名称

3.常用插件
npm install gulp-less --save-dev   编译less
npm install gulp-cssnano --save-dev 压缩css文件
npm install gulp-concat --save-dev	合并文件
npm install brower-sync --save-dev	浏览器同步
npm install gulp-minify-html —save-dev 压缩html文件	
npm install gulp-minify-css —-save-dev 压缩css文件
npm install gulp-uglify —-save-dev	压缩混淆js文件

五、gulp-demo2
Gulp综合案例，步骤：
1.创建npm配置文件，即初始化package.json
	npm init
2.本地安装gulp，添加gulp依赖
	npm install gulp --save-dev	
3.创建gulpfile.js任务文件
	在项目根路径下创建	
4.定义任务














