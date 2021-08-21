
const fs = require('fs')
const less = require('less')
const path = require('path')
const esbuild = require('esbuild')
const prettier = require('prettier')
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
    },
    printUsage: function () {
    },
    setOptions: function(options) {
        this.options = {}
    },
    minVersion: [2, 0, 0]
};

function readCSS(str,file) {
  return new Promise((resolve, reject) => {
    less.render(str,{plugins:[lessPlugin],paths:[path.join(file.path,'../')]},(err, res)=>{
      if (!err){
        resolve(res.css)
      }else {
        reject()
      }
    }) 
  });
}

function readFile(file) {
  return fs.readFileSync(file.path, 'utf8')
}

module.exports = options => {
  return {
    name: "auto-delete-console",
    setup(build) {
      build.onLoad({ filter: /\.js$/ }, async (args) => {
        let text = fs.readFileSync(args.path, 'utf8')
        if (args.path.includes('app.js')) {
          text += `\nconst config = require('./app.json');console.log(config);config.pages.forEach((e)=>require('./' + e + '.js'))\n`
        }
        return {
          contents: text,
          loader: "js"
        }
      })
      build.onLoad({ filter: /\.wxss$/ }, async (args) => {
        const str = readFile(args)
        // const context = await readCSS(str,args)
        return {
          contents: str,
          loader: "css"
        }
      })
    }
  }
}