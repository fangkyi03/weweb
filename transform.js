var through = require('through');
var fs = require('fs')

function read() {
    console.log('asd',fs.readFileSync('./dist/pages/index/index.wxml','utf-8'))
}
module.exports = function (files, opts) {
    console.log('输出')
    var data = '';
    return through(write, end);
    function write (buf) { data += buf }
    function end () {
        var template = '<div>{{data.test}}</div>'
        var temp = `
            window = null
            document = null
            var template = '${template}';
            var App = (appData)=> {
                return _App("${files}",appData)
            }
            var Page = (config) => {
                return _Page("${files}",config,template)
            }
        `
        this.queue(temp + data.toString().replace("require('/", "require('./"))
        // this.queue(temp + data.toString())
        this.queue(null)
    }
}