var gulp = require('gulp')
var path = require('path')
var through = require('through')
var fs = require('fs')
var JsConfuser = require("js-confuser");
var browserify = require('browserify')
var less = require('less')
var through2 = require('through2')
var prettier = require('prettier')
const b = browserify({basedir:process.cwd(),commondir:true,browserField:false})

// 初始化定义配置
var rootPath = null
var outPath = path.join(process.cwd(),'dist')

function buildCSS(data) {
    return through2.obj((file, enc, cb)=>{
        if (file.isNull()) {
         return cb(null, file);
        }

        if (file.isStream()) {
        return cb(new PluginError('gulp-less', 'Streaming not supported'));
        }

        var str = file.contents.toString();
        function AutoprefixProcessor(options) {
            this.options = options || {};
        };
        AutoprefixProcessor.prototype = {
            process: function(css, extra) {
                return prettier.format(css,{parser:'less'})
            }
        }
        var lessPlugin = {
            install: function(less, pluginManager) {
                pluginManager.addPreProcessor(new AutoprefixProcessor())
                // var AutoprefixProcessor = getAutoprefixProcessor(less);
                // pluginManager.addPostProcessor(new AutoprefixProcessor(this.options));
            },
            printUsage: function () {
                // usage.printUsage();
            },
            setOptions: function(options) {
                this.options = {}
            },
            minVersion: [2, 0, 0]
        };
        less.render(str,{plugins:[lessPlugin],paths:[path.join(file.path,'../')]},(err, res)=>{
            if (!err){
                file.contents = new Buffer(res.css)
                cb(null, file)
            }else {
                console.log('object',file.path)
                cb(null,err)
            }
        })
    })
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
    const pageConfig = ['app.js']
    const pagePath = pageConfig.map((e)=> path.join(process.env.rootPath,e))
    return gulp.src(pagePath,{ since: gulp.lastRun('importAllJS') })
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
    return gulp.src(path.join(process.env.rootPath,'/**/*.wxss'),{ since: gulp.lastRun('css') })
    .pipe(buildCSS())
    .pipe(out(tempOutPath))
})

// 初始化taro路径
gulp.task('initTARO_PATH',(cb)=> {
    rootPath = path.join(process.cwd(),'taro')
    process.env.rootPath = path.join(rootPath,'dist')
    cb()
})

// 初始化remax路径
gulp.task('initREMAX_PATH',(cb)=> {
    rootPath = path.join(process.cwd(),'remax')
    process.env.rootPath = path.join(rootPath,'dist')
    cb()
})

// 初始化remax路径
gulp.task('initWEPY_PATH',(cb)=> {
    rootPath = path.join(process.cwd(),'wepy')
    process.env.rootPath = path.join(rootPath,'weapp')
    cb()
})

// 初始化remax路径
gulp.task('initKONE_PATH',(cb)=> {
    rootPath = path.join(process.cwd(),'kbone')
    process.env.rootPath = path.join(rootPath,'dist/mp')
    cb()
})

// 初始化remax路径
gulp.task('initMINI_PATH',(cb)=> {
    rootPath = path.join(process.cwd(),'miniprogram-demo')
    process.env.rootPath = path.join(rootPath,'miniprogram')
    cb()
})

// 注入文件
gulp.task('inject',()=>{
    return gulp.src(['web/*.js','!web/transform.js'],{ since: gulp.lastRun('inject') })
    // .pipe(confuser())
    .pipe(gulp.dest(path.join(outPath,'js')))
})

// 定义remax执行队列
gulp.task('remax',gulp.series('initREMAX_PATH',gulp.parallel(['js','css','inject'])))

// 定义taro执行队列
gulp.task('taro',gulp.series('initTARO_PATH',gulp.parallel(['js','css','inject'])))

// 定义wepy执行队列
gulp.task('wepy',gulp.series('initWEPY_PATH',gulp.parallel(['js','css','inject'])))

// 定义kbone执行队列
gulp.task('kbone',gulp.series('initKONE_PATH',gulp.parallel(['js','css','inject'])))

// 定义mini执行队列
gulp.task('mini',gulp.series('initMINI_PATH',gulp.parallel(['js','css','inject'])))

