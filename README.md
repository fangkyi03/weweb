网页运行微信小程序

# 安装
pnpm i \
cd taro && pnpm i 

# 运行
cd taro && npm run build:weapp\
../ \
npm run esbuild \
在编译的out文件夹中 找到index.html文件 然后打开 就是微信小程序的页面了

初稿 主要实现小程序在网页中完整运行的效果