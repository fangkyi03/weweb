function parse(str) {
    let input = str.replace(/[\r\n]/g, '')
    let pos = 0
    const ast = {
        children:[],
        type: 'root',
    }
    let current = ast
    let isOpen = false
    let isClose = false
    let openPos = 0
    let text = ''
    let char = ''
    function getTagNameOfAttr(text,type) {
        if (type == 'text') {
            return {
                type: 'text',
                value: text.replace(/\s+/g, '')
            }
        }
        const context = text.replace(/<|>|\/>/g,'').replace(/\s+/g, ' ').replace(/"/g,`'`)
        const split = context.split(' ')
        if (split.length === 1) {
            return {
                name: split[0],
                attributes:{},
                children:[],
                parent:current,
                type
            }
        }else {
            const obj = {}
            context.slice(split[0].length).trim().replace(/' /g,`'nnn `).split('nnn ').forEach(item => {
                const [key, value] = item.split('=')
                if (value) {
                    obj[key] = value.slice(1,-1)
                }
            })
            return {
                name: split[0],
                attributes:obj,
                children:[],
                parent:current,
                type
            }
        }
    }
    function addChildren(text,type) {
        const child = getTagNameOfAttr(text,type)
        current.children.push(child)
        return child
    }
    while (pos < input.length) {
        char = input.slice(pos)
        if (input[pos] === '<') {
            let index = input.slice(pos).indexOf('>')
            // 判断当前是否是闭合标签
            if (input[pos + 1] === '/') {
                if (isClose) {
                    addChildren(text,'text')
                    text = ''
                }
                isClose = false
                current = current.parent
                pos += index
            }else if (input.substr(pos,index + 1).indexOf('/') > -1) { // 判断是否是自闭合标签
                current = addChildren(input.substr(pos,index + 1),'node')
                pos += index 
            }
            else {
                if (isClose) {
                    addChildren(text,'text')
                    text = ''
                }
                isOpen = true
                isClose = false
                openPos = pos
            }
        }else if (input[pos] === '>' && isOpen) {
            if (input[pos - 1] === '/') {
              current = current.parent
            }else {
                isOpen = false
                isClose = true
                let child = addChildren(input.slice(openPos + 1, pos),'node')
                current = child
            }
        }else if (isClose){
            text += input[pos]
        }
        pos += 1
    }
    return ast
}

parse(`<view class="index-desc"><navigator url="pages/doc-web-view/doc-web-view" class="weui-agree__link">小程序开发文档</navigator>。</view>`)
module.exports = {
    parse
}