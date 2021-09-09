const path = require('path')
const esbuild = require('./core/esbuild')
// esbuild.init({
//     targetPath:'/Users/lv/Desktop/ztesa-wechat-ynx/dist'
// })
// esbuild.init({
//     targetPath:path.join(__dirname,'../remax/dist')
// })
// esbuild.init({
//     targetPath:path.join(__dirname,'../taro/dist')
// })
// esbuild.init({
//     targetPath:path.join(__dirname,'../taro-redux/dist')
// })
// esbuild.init({
//     targetPath:path.join(__dirname,'../taro-mobx/dist')
// })
// esbuild.init({
//     targetPath:path.join(__dirname,'../taro-vue2/dist')
// })
esbuild.init({
    targetPath:path.join(__dirname,'../mini-demo')
})
// esbuild.init({
//     targetPath:path.join(__dirname,'../miniprogram-demo/miniprogram')
// })