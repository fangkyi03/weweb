var htmlparser2 = require("htmlparser2");
var f = require('../core/file')
var p = require('prettier')

// 判断当前是否有事件
function getEvent(key) {
    if (key.indexOf('bind') != -1 ) {
        return key.replace('bind','@')
    }else {
        return key
    }
}

// 删除括号
function removeParenTheses(data) {
    return data.replace('{','').replace('}','')
}
// 判断当前对象是否有for循环 
function getAttribsObj(attribs) {
    if (attribs['v-for-items']) {
        const items = removeParenTheses(attribs['v-for-items'])
        const item = removeParenTheses(attribs['v-for-item'] || 'item') 
        const key = removeParenTheses(attribs['v-for-key'] || 'key') 
        delete attribs['v-for-items']
        delete attribs['v-for-item']
        delete attribs['v-for-key']
        return {
            'v-for': `${item} in ${items}`,
            ':key': key,
            ...attribs,
        }
    }else {
        return attribs
    }
}

function getInitAttr (attribs) {
    // 将所有wx:开头的属性转换为v-开头
    const json = JSON.parse(JSON.stringify(attribs).replace(/wx:/g,'v-'))
    const obj = {}
    Object.keys(json).forEach((key)=>{
        obj[key] = json[key].replace('{{','{').replace('}}','}')
    })
    return obj
}

function getAttribs(attribs) {
    let attribsStr = ''
    // 获取初始化的属性对象
    let obj = getInitAttr(attribs)
    // 获取for循环过滤以后的属性
    const attribsObj = getAttribsObj(obj)
    for (let key in obj) {
        // 初始化事件的对象
        let keyText = getEvent(key)
        attribsStr += `${keyText}="${attribsObj[key]}" `
    }
    return attribsStr
}
function getTagName(item) {
    if (item.name == 'template' && item.attribs.is) {
        return item.attribs.is
    }else {
        return item.name
    }
}
function getTagTemplate(item) {
    const tagName = getTagName(item)
    return `
        <${tagName} ${getAttribs(item.attribs)}>
            ${getTemplateText(item.children)}
        </${tagName}>
    `
}

// 获取wxs文件模板
function getWXS(wxs) {
  if (wxs.attribs.src) {
    return `
        var ${wxs.attribs.module} = require('${wxs.attribs.src}')
    `
  }
  const data = "`var module = {exports:{}};" + wxs.attribs.src + "`";
  return `
    var ${wxs.attribs.module} = eval(${data})
  `;
}

function getTemplateText(children) {
    let template = ''
    if (children.length == 0) return ''
    for (let item of children) {
        if (item.type == 'text') {
            template += item.data
        }else if (item.type == 'tag' && item.name == 'template') {
            template += getTagTemplate(item)
            continue
        }else if (item.type == 'comment') {
            template += '<div>' + item.data + '</div>'
        }
        template += getTemplateText(item.children || [])
    }
    return template
}

function findAllTemplate(children,importText,templates) {
    for (let item of children ) {
        if (item.name == 'import' && item.attribs.src) {
            importText.push(`require('${item.attribs.src}')`)
        }
        if (item.type == 'tag') {
            if (item.name == 'wxs' ) {
                importText.push(getWXS(item))
            }else if (item.attribs.name) {
                templates.push(item)
            }
        }
        findAllTemplate(item.children || [],importText,templates)
    }
}

function getVueComponent(name,text) {
    return `
     Vue.component('${name}',{template:$template$})
    `.replace('$template$','`<div>' + text + '</div>`')
}
function getTemplate(filePath) {
    let importText = []
    let templates = []
    const content = f.readFile(filePath)
    const dom = htmlparser2.parseDocument(content)
    findAllTemplate(dom.children,importText,templates)
    if (templates.length == 0 ) {
        const templateText = getTemplateText(dom.children)
        return `
            ${importText.join('\n')}
            ${getVueComponent(f.getPageName(filePath),templateText)}
        `
    }else {
       let templateText = ''
       templates.forEach((e)=> {
           templateText += getVueComponent(e.attribs.name,getTemplateText(e.children))
       })
       return `
          ${importText.join('\n')}
          ${templateText}
        `
    }
}

module.exports = {
    getTemplate
}