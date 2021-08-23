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

function getTemplateText(children,importText) {
    let template = ''
    if (children.length == 0) return ''
    children.forEach((e)=>{
        if (e.name == 'import') {
            importText += `import('${e.attribs.src}')\n`
        }else if (e.type == 'text') {
            // template += e.data
        }else if (e.type == 'tag') {
            template += getTagTemplate(e)
        }else if (e.type == 'comment') {
            console.log('data',e.data)
            template += '<div>' + e.data + '</div>'
        }else {
            console.log(e)
        }
        template += getTemplateText(e.children || [],importText)
    })
    return template
}

function getTemplate(filePath) {
    const content = f.readFile(filePath)
    let importText = ''
    const dom = htmlparser2.parseDocument(content)
    let template = getTemplateText(dom.children,importText)
    template = `
        ${importText}
        Vue.component({template:$template$})\n
    `.replace('$template$','`' + template + '`')
    return template
}

module.exports = {
    getTemplate
}