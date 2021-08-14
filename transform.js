var through = require('through');
var fs = require('fs')
var htmlparser2 = require('htmlparser2')
var path = require('path')
var prettier = require("prettier");

var rootPath = path.join(__dirname, '/remax/dist/')

// 添加对应的模板数据
function addTemplate(templateList,item) {
    const {name,children,attribs} = item || {}
    templateList.push({name,children,attribs})
}

// 递归遍历page的模板数据
function getPageChildren({filePath,templateList = []} = {}) {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const dom = htmlparser2.parseDocument(fileContent)
    dom.children.forEach((e)=>{
        if (e.name == 'import') {
            const importPath = path.join(rootPath,e.attribs.src)
            addTemplate(templateList,e)
            getPageChildren({filePath:importPath,templateList})
        }else {
            addTemplate(templateList,e)
        }
    })
}

// 模板数据过滤
function filterTemplate(templates = []){
    return templates.filter((e)=> e.name && e.name !== 'import')
}

// 获取props属性文本
function getPropsText(attribs) {
    let text = ''
    Object.keys(attribs).forEach((e)=>{
        if (e !== 'wx:key') {
            let name = e.replace('wx:','v-')
            let attr = attribs[e].replace('{{','').replace('}}','')
            if (e == 'wx:for') {
                text += `${name}="item in ${attr}"`
            }else {
                text += `${name}="${attr}" `
            }
        }
    })
    return text
}

function getTypeText(type) {
    if (type == 'block') {
        return 'div'
    }else {
        return type
    }
}

// 根据组件类型显示对应组件
function getComponentTextByType(item) {
    const {attribs = {},children = [],name = ''} = item
    const props = getPropsText(attribs)
    return `
        <div>
            <$Tag$ $props$>
                $children$
            </$Tag$>
        </div>
    `.replace(/\$Tag\$/g,getTypeText(name))
    .replace(/\$props\$/g,props)
    .replace(/\$children\$/g,children ? getTemplateChildrenRecursive(children) : '')
}

// 单条模板递归
function getTemplateChildrenRecursive(children) {
    let childrenText = ''
    children.filter((e)=>!(e.type == 'text' && e.data == ' ')).forEach((e)=> {
        if (e.name == 'template') {
            // childrenText += getTemplateChildrenRecursive(e) + '\n'
        }else {
            childrenText += getComponentTextByType(e,) + '\n'
        }
    }) 
    return childrenText
}

// 获取单条模板数据
function getTemplateChildrenText(child,templateTextList) {
    const {attribs = {},children = []} = child || {}
    const {name} = attribs || {}
    let childrenText = getTemplateChildrenRecursive(children,templateTextList)
    return `
        Vue.component('${name}',{
            props:['data'],
            data(){
                return this.$props.data
            },
            template:$template$
        })
    `.replace(/\$template\$/g,'`' + childrenText + '`')
}

// 构建wxs数据
function getWXSChildrenText(wxs) {
    const data = "`var module = {exports:{}};" + wxs.children[0].data + "`"
    return `
        var ${wxs.attribs.module} = eval(${data})
    `
}

// 获取模板对应的文本数据
function getTemplateListChildrenText(templateList = [],templateTextList) {
    templateList.forEach((e)=> {
        if (e.name == 'template') {
            templateTextList.push(getTemplateChildrenText(e,templateTextList))
        }else if (e.name == 'wxs' ) {
            templateTextList.push(getWXSChildrenText(e))
        }
    })
}

// 获取模板数据
function getPageTemplate(file) {
    if (file.indexOf('pages') != -1 ) {
        const filePath = path.join(file,'../','index.wxml')
        const templateList = []
        const templateTextList = []
        // 从页面中获取模板数据
        getPageChildren({filePath,templateList})
        // 从模板数据中过滤掉不需要的数据
        const filterData = filterTemplate(templateList)
        // 从模板数据中获取对应的文本数据
        getTemplateListChildrenText(filterData,templateTextList)
        return templateTextList.join('\n')
    }else {
        return ''
    }
}

module.exports = function (files, opts) {
    var data = '';
    return through(write, end);
    function write (buf) { data += buf }
    function end () {
        var template = getPageTemplate(files)
        var _appConfig = null
        if (files.indexOf('app.js') != -1 ) {
            _appConfig = fs.readFileSync('./remax/dist/app.json','utf-8')
            // _appConfig = fs.readFileSync('../ztesa-wechat-ynx/dist/app.json','utf-8')
        }
        var temp = `
            var _appConfig = ${_appConfig}
            ${prettier.format(template)}
            var App = (appData)=> {
                return _globalApp("${files}",_appConfig)
            }
            var Page = (config) => {
                const path = "${files}".replace('.js', '').split('/').slice(-3).join('/')
                return _globalPage(path,config,'<div class="app" v-bind:data="{root: root}">123123</div>')
            }
            var Component = (config) => {
                return _globalComponent("${files}",config,template)
            }
        `
        this.queue(temp + data.toString().replace("require('/", "require('./"))
        this.queue(null)
    }
}