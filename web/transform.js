var through = require("through");
var fs = require("fs");
var htmlparser2 = require("htmlparser2");
var path = require("path");
var prettier = require("prettier");
var rootPath = path.join(process.cwd(), "/remax/dist/");
var uglifyjs = require('uglify-js')


var fileCache = {}

// 添加页面模板
function addPageConfig() {
  return `
    var pageConfig = require('./index.json')
    var wxml = require('./index.wxml')
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
function addAppConfig() {
  const appContent = fs.readFileSync(path.join(process.cwd(),'/web/app.js'),'utf-8')
  return `
    var appConfig = require('./app.json')
    var App = (appData)=> {
      return _globalApp({appConfig})
    }
    ${appContent}
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

// 添加配置模板
function addInitConfig(files,firstTemplate) {
  const pagePath = "`" + files.replace('.js', '').split('/').slice(-3).join('/') + "`"
  let text = `
    var pagePath = ${pagePath || files}
  `
  if (firstTemplate) {
    text += 'var templateText = `' + getFirstTemplateText(firstTemplate) + '`'
    return text
  }else {
    return text
  }
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

function getTemplateFile() {
  return `
    console.log('wxml执行')
    module.exports = {
      test:123123123
    }
  `
}

module.exports = function (files, opts) {
  var data = "";
  console.log('files',files)
  return through(write, end);
  function write(buf) {
    data += buf;
  }
  function end() {  
    const isPage = files.indexOf('pages') != -1
    const isApp = files.indexOf('app.js') != -1
    const isJson = path.extname(files) == '.json'
    const isWxml = path.extname(files) == '.wxml'
    if (isWxml) {
      console.log('wxml')
    }
    const templateList = []
    const templateTextList = []
    let firstTemplate = null
    if (fileCache[files]) {
      this.queue(fileCache[files])
      this.queue(null)
      return
    }
    if (isJson) {
      fileCache[files] =  data
      this.queue(fileCache[files])
      this.queue(null)
      return
    }
    if (isWxml) {
      fileCache[files] =  getTemplateFile(files,data)
      this.queue(fileCache[files])
      this.queue(null)
      return
    }
    if (isPage) {
      scanImport(wxmlPathConvert(files), templateList)
      scanParentTemplate(templateList, templateTextList)
      if (templateList.length > 0) {
        const index = templateList.findIndex((e)=>e.name == 'template')
        firstTemplate = templateList[index]
      }
    }
    const text = execute([
      addInitConfig(files,firstTemplate),
      isApp && addAppConfig(),
      isPage && addPageConfig(files),
      addComponentConfig(files),
      templateTextList.length > 0 && templateTextList.join('\n').toString(),
    ])
    const content = data.replace(/require\('\//g, `require('./`)
    fileCache[files] = text.join('\n').toString() + content
    this.queue(fileCache[files])
    this.queue(null)
  }
}; 
