const esbuild = require('esbuild')
const esbuildPlugin = require('../plugin/esbuildPlugin')
const file = require('./file')
var rootPath = ''

function getPageConfig (outDir) {
    const appJSON = file.getAppJSON(rootPath) || {}
    const pages = [
        {
            path:'app.js',
            outfile:`${outDir}/index/app.js`
        },
        ...(appJSON.subpackages || []).map((e)=>{
            return {
                path:e.root,
                children:e.pages,
                outfile:outDir + e.root + '/app.js'
            }
        })
    ]
    return pages.map((e)=>{
        if (e.children) {
            let text = ''
            e.children.forEach((el)=>{
                text = `require('${rootPath}/${e.path}/${el}')\n`
            })
            return {
                outfile:e.outfile,
                stdin:{
                    contents:text,
                    resolveDir :process.cwd(),
                }
            }
        }else {
            return {
                outfile:e.outfile,
                entryPoints:[file.getAppPATH(rootPath,e.path)]
            }
        }
    })
}

const init = ({targetPath,outDir = './out/',minify = false} = {}) => {
    rootPath = targetPath
    // 获取所有可以被遍历的页面
    const pages = getPageConfig(outDir)
    pages.forEach((e)=>{
        esbuild.build({
            ...e,
            bundle:true,
            format:'esm',
            plugins:[esbuildPlugin()],
            outfile:e.outfile
        })
    })
}

module.exports = {
    init
}