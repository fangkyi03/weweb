const esbuild = require('esbuild')
const gulp = require('gulp')
const path = require('path')
const esbuildPlugin = require('../plugin/esbuildPlugin')
const file = require('./file')
var rootPath = ''
function getPageConfig (outDir) {
    const appJSON = file.getAppJSON(rootPath) || {}
    const pages = [
        {
            path:'/',
            outfile:`${outDir}/index/dist.js`,
            children:appJSON.pages
        },
        ...(appJSON.subpackages || []).map((e)=>{
            return {
                path:e.root,
                children:e.pages,
                outfile:outDir + '/' + e.root + '/dist.js'
            }
        })
    ]
    return pages.map((e)=>{
        let text = ''
        e.children.forEach((el)=>{
            if (e.path == '/' ) {
                text += `require('${rootPath}/${el}')\n`
            }else {
                text += `require('${rootPath}/${e.path}/${el}')\n`
            }
        })
        return {
            outfile:e.outfile,
            // children:e.children,
            stdin:{
                contents:text,
                resolveDir :process.cwd(),
            }
        }
    })
}

const init = ({targetPath,outDir = './out',minify = false} = {}) => {
    rootPath = targetPath
    // 获取所有可以被遍历的页面
    const pages = getPageConfig(outDir)
    pages.forEach((e)=>{
        esbuild.build({
            ...e,
            bundle:true,
            format:'esm',
            // minify:true,
            plugins:[esbuildPlugin(e.outfile)],
            outfile:e.outfile,
        })
        .then(()=>{
            gulp.src(path.join(__dirname,'../publish/**/*'))
            .pipe(gulp.dest(path.join(e.outfile,'../')))
        })
    })
}

module.exports = {
    init
}