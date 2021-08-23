const path = require('path')
const fs = require('fs')

// 收集所有的数据 转换成新文本
function getText (arr) {
    if (arr.length > 0) {
        return arr.join('\n')
    } else {
        return ''
    }
}

// 获取app模板
function getApp(options) {
    const {pages = []} = options || {}
    return `
      var __pages__ = ${JSON.stringify(pages)}
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
        const page = getPage('${pagePath}')
        page.template = $wxmlContent$
        page.json = $jsonContent$
    `
    .replace('$wxmlContent$',`'<test>测试</test>'`)
    .replace('$jsonContent$','`' + jsonContent + '`')
}

module.exports = {
    getText,
    getApp,
    getPage
}