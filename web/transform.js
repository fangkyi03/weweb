var through = require("through");
var fs = require("fs");
var htmlparser2 = require("htmlparser2");
var path = require("path");
var prettier = require("prettier");
var rootPath = path.join(process.cwd(), "/remax/dist/");
var uglifyjs = require('uglify-js')


var fileCache = {}

// 添加页面模板
function addPageConfig(files) {
  return `
    var Page = (config) => {
      return _globalPage(pagePath,config,templateText)
    }
  `
}

// 添加组件模板
function addComponentConfig(files) {
  return `
    var Component = (config) => {
      return _globalComponent(pagePath,config,templateText)
    }
  `
}

// 添加app模板
function addAppConfig() {
  return `
    var App = (appData)=> {
      return _globalApp(_appConfig)
    }
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
  var str = fs.readFileSync(path.join(getRootPATH(),'app.json'), 'utf8')
  const pagePath = "`" + files.replace('.js', '').split('/').slice(-3).join('/') + "`"
  let text = `
    var _appConfig = ${str}
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
      return path.join(parent,filePath)
    }
  }else {
    return currentPATH
  }
}

// 获取文件内容
function getFileContent(filePath) {
  if (fileCache[filePath]) {
    return fileCache[filePath]
  }
  var content = fs.readFileSync(filePath, 'utf8')
  fileCache[filePath] = content
  return content
}

// 获取模板数据
function scanImport(files, templateList) {
  const fileContent = getFileContent(files)
  const dom = htmlparser2.parseDocument(fileContent)
  dom.children.forEach((e)=>{
    if (e.name == 'import') {
      e.children.forEach((el)=>{
        if (el.name == 'template') {
          templateList.push(el)
        }
      })
      scanImport(wxmlPathConvert(e.attribs.src,files), templateList)
    }else if (e.type == 'tag') {
      templateList.push(e)
    }
  })
}

// 获取wxs文件模板
function getWXS(wxs) {
  const data = "`var module = {exports:{}};" + wxs.children[0].data + "`";
  return `
    var ${wxs.attribs.module} = eval(${data})
  `;
}

// 获取组件模板数据
function getComponentTemplateText(item) {
  const { attribs = {}, children = [] } = item || {};
  const { name } = attribs || {};
  return `
    Vue.component('${name}',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
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

module.exports = function (files, opts) {
  var data = "";
  return through(write, end);
  function write(buf) {
    data += buf;
  }
  function end() {
    const isPage = files.indexOf('pages') != -1
    const isApp = files.indexOf('app.js') != -1
    const templateList = []
    const templateTextList = []
    let firstTemplate = null
    if (isPage) {
      scanImport(wxmlPathConvert(files), templateList)
      scanParentTemplate(templateList, templateTextList)
      if (templateList.length > 0) {
        firstTemplate = templateList[0]
      }
    }
    if (fileCache[files]) {
      this.queue(fileCache[files])
      this.queue(null)
      return
    }
    const text = execute([
      addInitConfig(files,firstTemplate),
      addAppConfig(),
      addPageConfig(files),
      addComponentConfig(files),
      templateTextList.length > 0 && templateTextList.join('\n').toString(),
      data.replace(/require\('\//g, `require('./`)
    ])
    fileCache[files] = text.join('\n').toString()
    this.queue(fileCache[files])
    this.queue(null)
  }
}; 
