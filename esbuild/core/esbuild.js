const esbuild = require('esbuild')
const gulp = require('gulp')
const path = require('path')
const esbuildPlugin = require('../plugin/esbuildPlugin')
const file = require('./file')
function getPageConfig (config) {
    const appJSON = file.getAppJSON(config.targetPath) || {}
    const pages = [
        {
            path:'/',
            outfile:`${config.outdir}/index/dist.js`,
            outdir:'./out/index/css',
            children:appJSON.pages
        },
        // ...(appJSON.subpackages || []).map((e)=>{
        //     return {
        //         path:e.root,
        //         children:e.pages,
        //         outdir:config.outdir + '/' + e.root + '/css/pages',
        //         outfile:config.outdir + '/' + e.root + '/dist.js'
        //     }
        // })
    ]
    return pages.map((e)=>{
        let text = ''
        e.children.forEach((el)=>{
            if (e.path == '/' ) {
                text += `require('${config.targetPath}/app.js')\n`
                text += `require('${config.targetPath}/${el}')\n`
            }else {
                text += `require('${config.targetPath}/app.js')\n`
                text += `require('${config.targetPath}/${e.path}/${el}')\n`
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

function buildJS(item,config) {
    esbuild.build({
        stdin:item.stdin,
        bundle:true,
        format:'esm',
        // watch:true,
        // minify:true,
        plugins:[esbuildPlugin(config,item)],
        outfile:item.outfile,
    })
    .then(()=>{
        gulp.src(path.join(__dirname,'../publish/**/*'))
        .pipe(gulp.dest(path.join(item.outfile,'../')))
    })
}

function buildCSS(item,config) {
    esbuild.build({
        entryPoints:item.childrens.map((e)=>{
            const filePath = path.join(config.targetPath,item.path,e)
            return file.getWXSSPATH(filePath)
        }),
        bundle:true,
        format:'esm',
        splitting:true,
        plugins:[esbuildPlugin(config)],
        outdir:item.outdir
    })
    
}

function getDefaultConfig(config = {}) {
    return {
        outdir:'./out',
        ...config,
    }
}

const init = (config = {}) => {
    const newConfig = getDefaultConfig(config)
    // 获取所有可以被遍历的页面
    const pages = getPageConfig(newConfig)
    pages.forEach((e)=>{
        buildJS(e,newConfig)
        buildCSS(e,newConfig)
    })
}

module.exports = {
    init
}