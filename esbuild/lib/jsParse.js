const path = require('path')
const fs = require('fs')

// 收集所有的数据 转换成新文本
function getText (arr) {
    const list = arr.filter((e)=>e)
    if (list.length > 0) {
        return list.join('\n')
    } else {
        return ''
    }
}

// 获取app模板
function getApp(childrens) {
    return `
      window['__pages__'] = ${JSON.stringify(childrens)}
    `
}

// 获取page模板
function getPage(options,filePath) {
    const pagePath = filePath.replace(options.targetPath,'').replace('.js', '').slice(1)
    const fileName = pagePath.split('/').slice(-1)[0]
    const wxmlPath = path.join(filePath,`../${fileName}.wxml`)
    const jsonPath = path.join(filePath,`../${fileName}.json`)
    const jsonContent = fs.existsSync(jsonPath) ? fs.readFileSync(jsonPath, 'utf8') : ''
    const wxmlContent = fs.existsSync(wxmlPath) ? fs.readFileSync(wxmlPath, 'utf8') : ''
    return `
        $wxmlrequire$
        window['__wxRoute'] = '${pagePath}'
        const page = getPage('${pagePath}')
        // page.template = '<${pagePath} />'
        page.json = $jsonContent$;\n
    `
    .replace('$wxmlContent$',`'<div>测试</div>'`)
    .replace('$jsonContent$','`' + jsonContent + '`')
    .replace('$wxmlrequire$',fs.existsSync(wxmlPath) ? `require('./${fileName}.wxml')` : '')
}

module.exports = {
    getText,
    getApp,
    getPage
}