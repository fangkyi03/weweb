var gulp = require('gulp')
var path = require('path')
var through = require('through')
var fs = require('fs')
var JsConfuser = require("js-confuser");
function buildCSS() {
    var data = '';
    return through(write, end);
    function write (buf) { 
        return data += buf._contents
     }
    function end () {
        this.queue(data)
        this.queue(null)
    }
}
function end() {
    var data = '';
    return through(write, end);
    function write (buf) { 
        return data += buf
     }
    function end () {
        fs.writeFileSync(path.join(process.cwd(),'./dist/css/app.css'), data)
        this.queue(null)
    }
}

// 加密js代码
function confuser(filePath) {
    let data = ''
    return through(write, end);
    function write (buf) { 
        return data += buf._contents
     }
    function end () {
        JsConfuser.obfuscate(data,{
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
            fs.writeFileSync(filePath, e)
        })
    }
}
gulp.src(path.join(__dirname,'/remax/dist/**/*.wxss'))
.pipe(buildCSS())
.pipe(end())

gulp.src(path.join(__dirname,'/web/engine.js'))
.pipe(confuser(path.join(__dirname,'/dist/js/enginecode.js')))

gulp.src(path.join(__dirname,'/web/app.js'))
.pipe(confuser(path.join(__dirname,'/dist/js/appcode.js')))
