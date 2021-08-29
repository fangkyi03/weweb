var {parse} = require('../tool/wxml')
var f = require('../core/file')
var p = require('prettier')

// 判断当前是否有事件
function getEvent(key = '') {
    return key.replace(/:bind|bind/g,':')
}

// 删除括号
function removeParenTheses(data = '') {
    return data.replace('{','').replace('}','')
}
// 判断当前对象是否有for循环 
function getattributesObj(attributes) {
    // delete attributes.is
    if (attributes['v-for-items']) {
        const items = removeParenTheses(attributes['v-for-items'])
        const item = removeParenTheses(attributes['v-for-item'] || 'item') 
        const key = removeParenTheses(attributes['v-for-key'] || 'key') 
        delete attributes['v-for-items']
        delete attributes['v-for-item']
        delete attributes['v-for-key']
        return {
            'v-for': `${item} in ${items}`,
            'key': key,
            ...attributes,
        }
    } else if (attributes['v-for']) {
        const items = removeParenTheses(attributes['v-for'])
        const key = removeParenTheses(attributes['v-key'] || 'key') 
        delete attributes['v-key']
        return {
            ...attributes,
            'v-for':`item in ${items}`,
            'key':key
        }
    } else if (attributes['wx-if']) {
        const items = removeParenTheses(attributes['wx-if'])
        delete attributes['wx-if']
        return {
            ...attributes,
            'v-if':`${items}`
        }
    }
    else {
        return attributes
    }
}

function getInitAttr (attributes) {
    // 将所有wx:开头的属性转换为v-开头
    const json = JSON.parse(JSON.stringify(attributes).replace(/wx:/g,'v-'))
    const obj = {}
    Object.keys(json).forEach((key)=>{
        obj[key] = json[key].replace('{{','{').replace('}}','}')
    })
    return obj
}

function getattributes(attributes) {
    let attributesStr = ''
    // 获取初始化的属性对象
    let obj = getInitAttr(attributes)
    // 获取for循环过滤以后的属性
    const attributesObj = getattributesObj(obj)
    for (let key in attributesObj) {
        // 初始化事件的对象
        let keyText = getEvent(key)
        if (/{|}/g.test(attributesObj[key])) {
            if (key == 'data') {
                 attributesStr += `:${keyText}="${attributesObj[key]}" `
            }else {
                attributesStr += `:${keyText}="${attributesObj[key].replace('{','').replace('}','')}" `
            }
        }else {
            attributesStr += `${keyText}="${attributesObj[key]}" `
        }
    }
    return attributesStr
}
function getTagName(item) {
    if (item.name == 'template' && item.attributes.is) {
        return 'component'
    }else if (item.name == 'block') {
        return 'div'
    }else {
        return 'wx-' + item.name
    }
}
function getTagTemplate(item) {
    const tagName = getTagName(item)
    return `
        <${tagName} ${getattributes(item.attributes)}>
            ${getTemplateText(item.children)}
        </${tagName}>
    `
}

// 获取wxs文件模板
function getWXS(wxs) {
  if (wxs.attributes.src) {
    return `
        var ${wxs.attributes.module} = require('${wxs.attributes.src}')
    `
  }
  const data = "`var module = {exports:{}};" + wxs.attributes.src + "`";
  return `
    var ${wxs.attributes.module} = eval(${data})
  `;
}

function getTemplateText(children) {
    let template = ''
    if (children.length == 0) return ''
    for (let item of children) {
     if (item.type == 'node' && item.name !== 'import') {
            template += getTagTemplate(item)
            continue
        }else if (item.type == 'text') {
            template += item.value
        }
        template += getTemplateText(item.children || [])
    }
    return template
}

function findAllTemplate(children,importText,templates) {
    for (let item of children ) {
        if (item.name == 'import' && item.attributes.src) {
            importText.push(`require('${item.attributes.src}')`)
            continue
        }
        if (item.type == 'node') {
            if (item.name == 'wxs' ) {
                importText.push(getWXS(item))
            }else if (item.attributes.name) {
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
                xs,
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
    const content = f.readFile(filePath)
    const dom = parse(content)
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
           templateText += getVueComponent(e.attributes.name,getTemplateText(e.children),false)
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