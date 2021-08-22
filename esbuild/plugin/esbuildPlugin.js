
const fs = require('fs')
const path = require('path')

function readFile(file) {
  return fs.readFileSync(file.path, 'utf8')
}

var fileNumber = 0
module.exports = options => {
  return {
    name: "weweb",
    setup(build) {
      build.onLoad({ filter: /\.js$/ }, async (args) => {
        // console.log('输出当前文件',fileNumber,args.path)
        fileNumber += 1
        let text = fs.readFileSync(args.path, 'utf8')
        const isApp = args.path.includes('app.js')
        const isPage = args.path.includes('page')
        if (isApp) {
          const pageJSON = JSON.parse(fs.readFileSync(path.join(args.path,'../app.json'),'utf-8'))
          path.toNamespacedPath
          let pageText = ''
          pageJSON.pages.forEach((e)=>{
            pageText += `require('./${e}')\n`
          })
          text += `\n
            const appJSON = require('./app.json');
            ${pageText}
          `
        }
        if (isPage) {
          const pagePath = args.path.replace(options.targetPath,'').replace('.js', '').split('/').filter((e)=>e).slice(1).join('/')
          text += `
            fetch('./css/${pagePath}.css')
            .then(res => res.text())
            .then((e)=>{
              console.log('${pagePath}',e)
            })
            \n
          `
        }
        return {
          contents: text.replace(/require\('\//g, `require('./`),
          loader: "js"
        }
      })
      build.onLoad({ filter: /\.wxss$/ }, async (args) => {
        console.log('输出当前文件',fileNumber,args.path)
        const str = readFile(args)
        return {
          contents: str,
          loader: "css"
        }
      })
      build.onLoad({ filter: /\.wxml$/ }, async (args) => {
        return {
          contents: 'console.log(123)',
          loader: "js"
        }
      })
    }
  }
}