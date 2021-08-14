var gulp = require('gulp')
var path = require('path')
var through = require('through')
var fs = require('fs')
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
        fs.writeFileSync(path.join(__dirname,'./app.css'), data)
        this.queue(null)
    }
}
gulp.src(path.join(__dirname,'/remax/dist/**/*.wxss'))
.pipe(buildCSS())
.pipe(end())