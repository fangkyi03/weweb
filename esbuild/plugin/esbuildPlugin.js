
const fs = require('fs')
const path = require('path')
const { config } = require('process')
const f = require('../core/file')
const jsParse = require('../lib/jsParse')
const wxmlParse = require('../lib/wxmlParse')
const wxssParse = require('../lib/wxssParse')
module.exports = (options,item) => {
  return {
    name: "weweb",
    setup(build) {
      process.env.config = JSON.stringify(options)
      build.onLoad({ filter: /\.js$/ }, async (args) => {
        console.log('文件地址',args.path)
        const fileContent = f.readFile(args.path)
        const isPage = /page/.test(args.path)
        const isApp = /app.js/.test(args.path)
        const text = jsParse.getText([
          isApp && jsParse.getApp(item.childrens),
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
      build.onLoad({ filter: /\.wxs$/ }, async (args) => {
        const str = f.readFile(args.path)
        return {
          contents: str,
          loader: "js"
        }
      })
      build.onLoad({ filter: /\.wxml$/ }, async (args) => {
        const text = wxmlParse.getTemplate(args.path,options)
        return {
          contents: text,
          loader: "js",
          resolveDir:path.join(args.path,'../')
        }
      })
    }
  }
}