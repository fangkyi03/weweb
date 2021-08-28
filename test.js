function parse(input) {
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
                addChildren(input.substr(pos,index + 1),'node')
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

`<template name="tmpl_14_cover-view">
  <cover-view scroll-top="{{xs.b(i.scrollTop,false)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" marker-id="{{i.markerId}}" slot="{{i.slot}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid}}">
    <block wx:for="{{i.cn}}" wx:key="uid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </cover-view>
</template>`
parse(`<template name="taro_tmpl">
  <block wx:for="{{root.cn}}" wx:key="uid">
    <template is="tmpl_0_container" data="{{i:item,l:''}}" />
  </block>
</template>`)
module.exports = {
    parse
}