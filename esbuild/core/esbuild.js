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
            outdir:'./out/index',
            children:appJSON.pages
        },
        ...(appJSON.subpackages || []).map((e)=>{
            return {
                path:e.root,
                children:e.pages,
                outdir:outDir + '/' + e.root ,
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
            outdir:e.outdir,
            childrens:e.children,
            path:e.path,
            stdin:{
                contents:text,
                resolveDir :process.cwd(),
            }
        }
    })
}

function buildJS(item) {
    esbuild.build({
        stdin:item.stdin,
        bundle:true,
        format:'esm',
        // minify:true,
        plugins:[esbuildPlugin(item.outfile)],
        outfile:item.outfile,
    })
    .then(()=>{
        gulp.src(path.join(__dirname,'../publish/**/*'))
        .pipe(gulp.dest(path.join(item.outfile,'../')))
    })
}

function buildCSS(item) {
    esbuild.build({
        entryPoints:item.childrens.map((e)=>{
            const filePath = path.join(rootPath,item.path,e)
            return file.getWXSSPATH(filePath)
        }),
        bundle:true,
        format:'esm',
        splitting:true,
        plugins:[esbuildPlugin(item.outfile)],
        outdir:item.outdir + '/css'
    })
}

const init = ({targetPath,outDir = './out',minify = false} = {}) => {
    rootPath = targetPath
    // 获取所有可以被遍历的页面
    const pages = getPageConfig(outDir)
    pages.forEach((e)=>{
        buildJS(e)
        buildCSS(e)
    })
}

module.exports = {
    init
}