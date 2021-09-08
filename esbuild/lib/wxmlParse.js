var {parse,htmlParser2} = require('../tool/wxml')
var f = require('../core/file')
var p = require('prettier')
var path = require('path')
var modules = []
// 判断当前是否有事件
function getEvent(key = '') {
    return key.replace(/:bind|bind/g,':')
}

// 删除括号
function removeParenTheses(data = '') {
    return data.replace('{','').replace('}','')
}
// 判断当前对象是否有for循环 
function getattribsObj(attribs) {
    // delete attribs.is
    if (attribs['v-for-items']) {
        const items = removeParenTheses(attribs['v-for-items'])
        const item = removeParenTheses(attribs['v-for-item'] || 'item') 
        const key = removeParenTheses(attribs['v-for-key'] || 'key') 
        delete attribs['v-for-items']
        delete attribs['v-for-item']
        delete attribs['v-for-key']
        return {
            'v-for': `${item} in ${items}`,
            'key': key,
            ...attribs,
        }
    } else if (attribs['v-for']) {
        const items = removeParenTheses(attribs['v-for'])
        const key = removeParenTheses(attribs['v-key'] || 'key') 
        delete attribs['v-key']
        return {
            ...attribs,
            'v-for':`item in ${items}`,
            'key':key
        }
    } else if (attribs['wx-if']) {
        const items = removeParenTheses(attribs['wx-if'])
        delete attribs['wx-if']
        return {
            ...attribs,
            'v-if':`${items}`
        }
    }
    else {
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

function getattribs(attribs) {
    let attribsStr = ''
    // 获取初始化的属性对象
    let obj = getInitAttr(attribs)
    // 获取for循环过滤以后的属性
    const attribsObj = getattribsObj(obj)
    for (let key in attribsObj) {
        // 初始化事件的对象
        let keyText = getEvent(key)
        if (/{|}/g.test(attribsObj[key])) {
            if (key == 'data') {
                 attribsStr += `:${keyText}="${attribsObj[key]}" `
            }else {
                attribsStr += `:${keyText}="${attribsObj[key].replace('{','').replace('}','')}" `
            }
        }else {
            attribsStr += `${keyText}="${attribsObj[key]}" `
        }
    }
    return attribsStr
}
function getTagName(item) {
    if (item.name == 'template' && item.attribs.is) {
        return 'component'
    }else if (item.name == 'template' && item.attribs.name) {
        return 'wx-view'
    } else if (item.name == 'block') {
        return 'div'
    }else {
        return 'wx-' + item.name
    }
}
function getTagTemplate(item) {
    const tagName = getTagName(item)
    return `
        <${tagName} ${getattribs(item.attribs)}>
            ${getTemplateText(item.children)}
        </${tagName}>
    `
}

// 获取wxs文件模板
function getWXS(wxs) {
  if (wxs.attribs.src) {
    modules.push(wxs.attribs.module)
    return `
        var ${wxs.attribs.module} = require('${wxs.attribs.src}')
    `
  }else {
    const data = "`var module = {exports:{}};" + wxs.attribs.src + "`";
    modules.push(wxs.attribs.module)
    return `
        var ${wxs.attribs.module} = eval(${data})
    `;
  }
}

function getTemplateText(children) {
    let template = ''
    if (children.length == 0) return ''
    for (let item of children) {
     if (item.type == 'tag' && item.name !== 'import') {
            template += getTagTemplate(item)
            continue
        }else if (item.type == 'text') {
            template += item.value
        }
        template += getTemplateText(item.children || [])
    }
    return template
}

function getImportPath(str) {
    if (str[0] == '/') {
        const config = JSON.parse(process.env.config)
        return path.join(config.targetPath,str)
    }else {
        return str
    }
}
function findAllTemplate(children,importText,templates) {
    for (let item of children ) {
        if (item.name == 'import' && item.attribs.src) {
            importText.push(`require('${getImportPath(item.attribs.src)}')`)
            continue
        }
        if (item.type == 'tag') {
            if (item.name == 'wxs' ) {
                importText.push(getWXS(item))
            }else if (item.attribs.name) {
                templates.push(item)
            }
            continue
        }
        findAllTemplate(item.children || [],importText,templates)
    }
}

function getVueComponent(name,text,isPage) {
    if (isPage) {
        return `
            const page = getPage('${name}')
            page.template = \`<div>${text}</div>\`
        `
    }
    return `
     registerComponent('${name}',{
        data() {
            return {
                ${modules.toString()},
                ...this['$props'].data 
            }
        },
        template:$template$
     })
    `.replace('$template$','`<div>' + text + '</div>`')
}
function getTemplate(filePath) {
    let importText = []
    let templates = []
    modules = []
    const content = f.readFile(filePath)
    const dom = htmlParser2(content)
    findAllTemplate(dom.children,importText,templates)
    if (templates.length == 0 ) {
        const templateText = getTemplateText(dom.children)
        return `
            ${importText.join('\n')}
            ${getVueComponent(f.getPageName(filePath),templateText,true)}
        `
    }else {
       let templateText = ''
       templates.forEach((e)=> {
           templateText += getVueComponent(e.attribs.name,getTemplateText(e.children),false)
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