const esbuild = require('esbuild')
const esbuildPlugin = require('./esbuildPlugin')
const time = new Date()
esbuild.build({
    entryPoints:['./miniprogram-demo/miniprogram/page/weui/example/actionsheet/actionsheet.wxss'],
    bundle:true,
    minify:true,
    plugins:[esbuildPlugin()],
    outdir:'out'
})
.then((e)=>{
    console.log('输出时间',new Date() - time)
})