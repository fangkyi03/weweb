var through = require('through');

module.exports = function (files, opts) {
    var data = '';
    return through(write, end);
    function write (buf) { data += buf }
    function end () {
        var temp = `
            var App = (config)=> {
                console.log('出现app',config)
            }
            var Page = (config) => {
                return _Page("${files}",config)
            }
        `
        this.queue(temp + data.toString())
        // this.queue(temp + data.toString())
        this.queue(null)
    }
}