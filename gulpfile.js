var gulp = require('gulp')
var path = require('path')
var through = require('through')
var fs = require('fs')
var JsConfuser = require("js-confuser");
var browserify = require('browserify')
const b = browserify()
// var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify')
//调用js文件合并插件

// 初始化定义配置
var rootPath = null
var outPath = path.join(process.cwd(),'dist')

function buildCSS() {
    var data = '';
    return through(write, end);
    function write (buf) { 
        return data += buf._contents ? buf._contents : buf
     }
    function end () {
        this.queue(data)
        this.queue(null)
    }
}

// 汇总所有数据
function out(filePath) {
    var data = '';
    return through(write, end);
    function write (buf) { 
        return data += buf._contents ? buf._contents : buf
     }
    function end () {
        fs.writeFileSync(filePath, data)
        this.queue(null)
    }
}

// 加密js代码
function confuser() {
    var stream = through(function (file, encoding, callback) {
        this.pause()
        JsConfuser.obfuscate(file.contents.toString(),{
            target: "browser",
            preset: "high",
            minify:true,
            renameVariables:false,
            lock: {
                nativeFunctions:false
            },
            stringEncoding: false, // <- Normally enabled
        })
        .then((e)=> {
            file.contents = new Buffer(e)
            this.queue(file)
            this.resume()
        })
    })
    return stream;
}

function browserifyTask() {
  var stream = through(function (file, encoding, callback) {
    b.add(file.path)
    this.queue(file)
  })
  return stream;
}

// 引入所有js文件
gulp.task('importAllJS',()=>{
    const pageConfig = ['app.js','pages/**/*.js']
    const pagePath = pageConfig.map((e)=> path.join(rootPath,'dist',e))
    return gulp.src(pagePath)
    .pipe(browserifyTask())
})

gulp.task('bundleJS',()=>{
    const tempOutPATH = path.join(outPath,'js','dist.js')
    return b.transform('./web/transform.js')
    .bundle()
    .pipe(out(tempOutPATH))
})

gulp.task('js',gulp.series(['importAllJS','bundleJS']))

gulp.task('css',()=>{
    const tempOutPath = path.join(outPath,'css','app.css')
    return gulp.src(path.join(rootPath,'dist','/**/*.wxss'),{ since: gulp.lastRun('css') })
    .pipe(buildCSS())
    .pipe(out(tempOutPath))
})

// 初始化taro路径
gulp.task('initTARO_PATH',(cb)=> {
    rootPath = path.join(process.cwd(),'taro')
    cb()
})

// 初始化remax路径
gulp.task('initREMAX_PATH',(cb)=> {
    rootPath = path.join(process.cwd(),'remax')
    process.env.rootPath = path.join(rootPath,'dist')
    cb()
})

// 注入文件
gulp.task('inject',()=>{
    return gulp.src(['web/*.js','!web/transform.js'])
    .pipe(confuser())
    .pipe(gulp.dest(path.join(outPath,'js')))
})

// 定义remax执行队列
gulp.task('remax',gulp.series('initREMAX_PATH',gulp.parallel(['js','css','inject'])))

// 定义taro执行队列
gulp.task('taro',gulp.series('initTARO_PATH',gulp.parallel(['js','css','inject'])))
