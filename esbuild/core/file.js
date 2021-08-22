const fs = require('fs')
const path = require('path')

// 读取文件 - 文本
function readFile(filePATH) {
    return fs.readFileSync(filePATH,'utf-8')
}

// 读取文件 - json
function readJSON(filePATH) {
    return JSON.parse(readFile(filePATH))
}

// 读取app.json
function getAppJSON(filePath) {
    return readJSON(path.join(filePath,'app.json'))
}

// 读取app.js
function getAppPATH(rootPATH,filePATH) {
    return path.join(rootPATH,filePATH)
}

module.exports = {
    readFile,
    readJSON,
    getAppJSON,
    getAppPATH
}