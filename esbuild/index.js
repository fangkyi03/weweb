const path = require('path')
const esbuild = require('./core/esbuild')
esbuild.init({targetPath:path.join(__dirname,'../miniprogram-demo/miniprogram')})
