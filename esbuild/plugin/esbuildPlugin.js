
const fs = require('fs')
const path = require('path')
const f = require('../core/file')
const jsParse = require('../lib/jsParse')
const wxmlParse = require('../lib/wxmlParse')
const wxssParse = require('../lib/wxssParse')

module.exports = options => {
  return {
    name: "weweb",
    setup(build) {
      build.onLoad({ filter: /\.js$/ }, async (args) => {
        const fileContent = f.readFile(args.path)
        const isPage = /page/.test(args.path)
        const isApp = /app.js/.test(args.path)
        const text = jsParse.getText([
          isApp && jsParse.getApp(options),
          isPage && jsParse.getPage(options,args.path),
          fileContent
        ])
        return {
          contents:text,
          loader:'js'
        }
      })
      build.onLoad({ filter: /\.wxss$/ }, async (args) => {
        const str = f.readFile(args.path)
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