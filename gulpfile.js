// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');        //检查js
var concat = require('gulp-concat');        //合并js
var uglify = require('gulp-uglify');        //压缩js
var rename = require('gulp-rename');        //重命名
var cleanCSS = require('gulp-clean-css');   //压缩css
var clean = require('gulp-clean');          //清除
var minifyHtml = require("gulp-minify-html");

// 任务处理的文件路径配置
var paths = {
    js: [ // js目录
        './app/js/**'
    ],
    css: [
        './app/css/*'
    ],
    img: [
        './app/img/*'
    ],
    html: [
        './app/view/tmpl/*'
    ],
    lib: { // 第三方依赖文件
        js: [
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js.map',
            'bower_components/angular/angular.min.js',
            'bower_components/angular/angular.min.js.map',
            'bower_components/angular-resource/angular-resource.min.js',
            'bower_components/angular-resource/angular-resource.min.js.map',
            'bower_components/angular-ui-router/release/angular-ui-router.min.js'
        ],
        css: [
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/bootstrap/dist/css/bootstrap.min.css.map'
        ],
        img: [

        ]
    }
};

var output = "./dist/"; // output 

// 检查脚本
gulp.task('lint', function() {
    gulp.src('./app/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});



/* 开发环境 */
gulp.task('develop', function() {
    // src
    gulp.src(paths.html) // 要压缩的html文件
        .pipe(minifyHtml()) //压缩
        .pipe(gulp.dest(output + 'view/tmpl/'));

    gulp.src('./app/index.html') // 要压缩的html文件
        .pipe(minifyHtml()) //压缩
        .pipe(gulp.dest(output));

    gulp.src(paths.js)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(output + '/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(output + '/js'));

    gulp.src(paths.css)
        .pipe(cleanCSS())
        .pipe(gulp.dest(output + '/css'));


    gulp.src(paths.img)
        .pipe(gulp.dest(output + '/images'));

    // 将bower的库文件对应到指定位置
    gulp.src(paths.lib.js)
        .pipe(gulp.dest(output + '/js'));

    gulp.src(paths.lib.css)
        .pipe(gulp.dest(output + '/css'));

    gulp.src(paths.lib.img)
        .pipe(gulp.dest(output + '/images'));

    gulp.src('./bower_components/bootstrap/fonts/*')
        .pipe(gulp.dest(output + '/fonts/'))
});

gulp.task("clean", function() {
    return gulp.src(output)
        .pipe(clean());
})

// 默认任务
gulp.task('default', ['clean'], function() {
    gulp.start('lint', 'develop');

    // 监听文件变化
    // gulp.watch('./app/js/**/*.js', function(){
    //     gulp.run('lint', 'scripts');
    // });
});