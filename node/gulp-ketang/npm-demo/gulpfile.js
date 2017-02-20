/**
 * gulp的主配置文件，用于定义任务
 * 此处代码由Node执行
 */

'use strict';

//加载模块
var gulp=require('gulp');
var less=require('gulp-less');
var cssnano=require('gulp-cssnano');
var concat=require('gulp-concat');

//定义一个简单的任务
gulp.task('hello',function () {
	console.log('welcome to itany.');
});

//复制文件的任务
gulp.task('copy',function () {
	gulp.src('src/index.html') //读取源文件
		.pipe(gulp.dest('dist/')); //通过管道再次操作，写入到目标位置
});

//less编译和压缩的任务
gulp.task('less',function () {
	gulp.src('src/less/*.less')
		.pipe(less()) //编译
		.pipe(cssnano()) //压缩
		.pipe(gulp.dest('dist/css/'));
});

//js合并的任务
gulp.task('js',function () {
	gulp.src('src/js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js/'));
});

//定义监视任务
gulp.task('dist',function () {
	gulp.watch('src/index.html',['copy']); //监视src/index.html文件，当发生改变时自动执行copy任务
	gulp.watch('src/less/*.less',['less']);
	gulp.watch('src/js/*.js',['js']);
});














