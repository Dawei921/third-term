/**
 * gulp的主配置文件，用于定义任务
 * 此处代码由Node执行
 */

'use strict';

//加载模块
var gulp=require('gulp');

//定义一个简单的任务
gulp.task('hello',function () {
	console.log('welcome to itany.');
});

//复制文件的任务
gulp.task('copy',function () {
	gulp.src('src/index.html') //读取源文件
		.pipe(gulp.dest('dist/')); //通过管道再次操作，写入到目标位置
});