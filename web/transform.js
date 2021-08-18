var through = require("through");
var fs = require("fs");
var htmlparser2 = require("htmlparser2");
var path = require("path");
var prettier = require("prettier");
var rootPath = path.join(process.cwd(), "/remax/dist/");
var uglifyjs = require('uglify-js')
const { parseSync, transformFromAstSync, types, transformAsync, transformSync } = require('@babel/core')
const traverse = require("@babel/traverse").default;
var fileCache = {}

// 添加页面模板
function addPageConfig(files) {
  const pagePath = files.replace('.js', '').split('/').slice(-3).join('/')
  const fileName = pagePath.split('/').slice(-1)[0]
  const jsonExist = fs.existsSync(path.join(files,`../${fileName}.json`))
  const wxmlExist = fs.existsSync(path.join(files,`../${fileName}.wxml`))
  let pageConfigText = ''
  let wxmlText = ''
  if (jsonExist) {
    pageConfigText = `require('./${fileName}.json')`
  }else {
    pageConfigText = '{}' 
  }
  if (wxmlExist) {
    wxmlText = `require('./${fileName}.wxml')`
  }else {
    wxmlText = ''
  }
  return `
    var pageConfig = ${pageConfigText}
    ${wxmlText}
    var pagePath = '${pagePath}'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  `
}

// 添加组件模板
function addComponentConfig(files) {
  return `
    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  `
}

// 添加app模板
function addAppConfig(files) {
  const appContent = fs.readFileSync(path.join(process.cwd(),'/web/app.js'),'utf-8')
  const pageJSON = JSON.parse(fs.readFileSync(path.join(files,'../app.json'),'utf-8'))
  let pageText = ''
  pageJSON.pages.forEach((e)=>{
    pageText += `require('./${e}')\n`
  })
  return `
    var appConfig = require('./app.json')
    var App = (appData)=> {
      return _globalApp({appConfig})
    }
    ${appContent}
    ${pageText}
  `
}

// 执行命令 获取最终输出结果
function execute(arr) {
  return arr.filter((e)=>e)
}

// 获取props属性文本
function getPropsText(attribs) {
  let text = "";
  Object.keys(attribs).forEach((e) => {
    if (e !== "wx:key") {
      let name = e.replace("wx:", "v-");
      let attr = attribs[e].replace("{{", "").replace("}}", "");
      if (e == "wx:for") {
        text += `${name}="item in ${attr}"`;
      } else {
        text += `${name}="${attr}" `;
      }
    }
  });
  return text;
}

// 获取类型文本
function getTypeText(type) {
  if (type == "block") {
    return "div";
  } else {
    return type;
  }
}

// 将模板转换成字符串
function getTemplateText(item) {
  const { attribs = {}, children = [], name = "" } = item;
  const props = getPropsText(attribs);
  return `
        <div>
            <$Tag$ $props$>
            </$Tag$>
        </div>
    `
    .replace(/\$Tag\$/g, getTypeText(name))
    .replace(/\$props\$/g, props)
}

function getFirstTemplateText(item) {
  const { attribs = {}, children = [], name = "" } = item;
  return `
    <${attribs.is} :data="${attribs.data.replace('{','').replace('}','')}"/>
  `
}

// 获取顶级文件夹路径
function getRootPATH() {
  return process.env.rootPath
}

// 对路径进行转换
function wxmlPathConvert(filePath,parent) {
  let currentPATH = path.join(filePath,'../','index.wxml')
  if (parent) {
    if (filePath[0] == '/') {
     return path.join(getRootPATH(),filePath) 
    }else {
      return path.join(parent,'../',filePath)
    }
  }else {
    return currentPATH
  }
}

// 获取文件内容
function getFileContent(filePath) {
  return fs.readFileSync(filePath, 'utf8')
  // if (fileCache[filePath]) {
  //   return fileCache[filePath]
  // }
  // var content = fs.readFileSync(filePath, 'utf8')
  // fileCache[filePath] = content
  // return content
}

function getChildren(children = [],templateList,files) {
    children.forEach((e)=>{
    if (e.name == 'import') {
      getChildren(e.children,templateList,wxmlPathConvert(e.attribs.src,files))
      scanImport(wxmlPathConvert(e.attribs.src,files), templateList)
    }else if ((e.name == 'template') || e.name == 'wxs') {
      if (e.name == 'wxs') {
        if (e.attribs.src) {
          const contenxt = fs.readFileSync(path.join(files,'../',e.attribs.src), 'utf8')
          e.attribs.src = contenxt
        }else {
          e.attribs.src = e.children[0].data
        }
      }
      templateList.push(e)
      getChildren(e.children,templateList)
    }
  })
}
// 获取模板数据
function scanImport(files, templateList) {
  const fileContent = getFileContent(files)
  const dom = htmlparser2.parseDocument(fileContent)
  getChildren(dom.children,templateList,files)
}

// 获取wxs文件模板
function getWXS(wxs) {
  const data = "`var module = {exports:{}};" + wxs.attribs.src + "`";
  return `
    var ${wxs.attribs.module} = eval(${data})
  `;
}

// 获取组件模板数据
function getComponentTemplateText(item) {
  const { attribs = {}, children = [] } = item || {};
  const { name } = attribs || {};
  return `
    registerComponent('${name}','<div class="app">1111123123121</div>');
  `
}

// 扫描顶级模板数据
function scanParentTemplate(templateList, templateTextList) {
  templateList.forEach((e)=>{
    if (e.name == 'wxs') {
      templateTextList.push(getWXS(e))
    }else if (e.name == 'template' && e.attribs.name) {
      templateTextList.push(getComponentTemplateText(e))
    }
  })
}

function getWXMLFile() {
  return `
    // console.log('wxml执行')
    // module.exports = {
    //   test:123123123
    // }
  `
}

function getJSONFile(files,data) {
  if (files.indexOf('app.json') > -1) {
    const json = JSON.parse(data)
    return data
  }else {
    return data
  }
}

function parseBabel(data) {
  // const result = parseSync(data,{
  //   presets:[    
  //     [
  //       "@babel/preset-env",
  //       {
  //         "targets":{
  //           "node": "current"
  //         }
  //         // "useBuiltIns": "entry"
  //       }
  //     ]
  //   ]
  // })  
  return transformSync(data,{
    presets:[    
      [
        "@babel/preset-env",
        {
          "targets":{
            "node": "current"
          }
          // "useBuiltIns": "entry"
        }
      ]
    ]
  })
}
module.exports = function (files, opts) {
  var data = "";
  console.log('files',files)
  return through(write, end);
  function write(buf) {
    data += buf;
  }
  function end() { 
    const isPage = files.indexOf('page') != -1
    const isApp = files.indexOf('app.js') != -1
    const isJson = path.extname(files) == '.json'
    const isWxml = path.extname(files) == '.wxml'
    const templateList = []
    const templateTextList = []
    let firstTemplate = null
    let content = ''
    if (isJson) { // 判断是否是json
      content = getJSONFile(files,data)
    }else if (isWxml){ // 判断是否是wxml
      content = getWXMLFile(files,data)
    }else { // 判断是否是js
      data = parseBabel(data).code
      const text = execute([
          isApp && addAppConfig(files),
          isPage && addPageConfig(files),
          isPage && addComponentConfig(files),
          templateTextList.length > 0 && templateTextList.join('\n').toString(),
        ])
      content = text.join('\n').toString()  + data.replace(/require\('\//g, `require('./`)
    }
    this.queue(content)
    this.queue(null)
  }
}; 
