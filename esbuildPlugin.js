
const fs = require('fs')
const path = require('path')

function readFile(file) {
  return fs.readFileSync(file.path, 'utf8')
}

module.exports = options => {
  return {
    name: "weweb",
    setup(build) {
      build.onLoad({ filter: /\.js$/ }, async (args) => {
        let text = fs.readFileSync(args.path, 'utf8')
        if (args.path.includes('app.js')) {
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
        }else {
          const wxssFileName = args.path.split('/').slice(-1)[0].split('.')[0] + '.wxss'
          const wxmlFileName = args.path.split('/').slice(-1)[0].split('.')[0] + '.wxml'
          if (fs.existsSync(path.join(args.path,'../',wxssFileName))) {
            text = `require('./${wxssFileName}')\n` + text
          }
          if (fs.existsSync(path.join(args.path,'../',wxmlFileName))) {
            text = `require('./${wxmlFileName}')\n` + text
          }
        }
        return {
          contents: text.replace(/require\('\//g, `require('./`),
          loader: "js"
        }
      })
      build.onLoad({ filter: /\.wxss$/ }, async (args) => {
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