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

parse(`<template name="tmpl_0_button">
  <button size="{{xs.b(i.size,'default')}}" type="{{i.type}}" plain="{{xs.b(i.plain,false)}}" disabled="{{i.disabled}}" loading="{{xs.b(i.loading,false)}}" form-type="{{i.formType}}" open-type="{{i.openType}}" hover-class="{{xs.b(i.hoverClass,'button-hover')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,20)}}" hover-stay-time="{{xs.b(i.hoverStayTime,70)}}" name="{{i.name}}" lang="{{xs.b(i.lang,en)}}" session-from="{{i.sessionFrom}}" send-message-title="{{i.sendMessageTitle}}" send-message-path="{{i.sendMessagePath}}" send-message-img="{{i.sendMessageImg}}" app-parameter="{{i.appParameter}}" show-message-card="{{xs.b(i.showMessageCard,false)}}" business-id="{{i.businessId}}" bindgetuserinfo="eh" bindcontact="eh" bindgetphonenumber="eh" binderror="eh" bindopensetting="eh" bindlaunchapp="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid}}">
    <block wx:for="{{i.cn}}" wx:key="uid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </button>
</template>

<template name="tmpl_0_scroll-view">
  <scroll-view scroll-x="{{xs.b(i.scrollX,false)}}" scroll-y="{{xs.b(i.scrollY,false)}}" upper-threshold="{{xs.b(i.upperThreshold,50)}}" lower-threshold="{{xs.b(i.lowerThreshold,50)}}" scroll-top="{{i.scrollTop}}" scroll-left="{{i.scrollLeft}}" scroll-into-view="{{i.scrollIntoView}}" scroll-with-animation="{{xs.b(i.scrollWithAnimation,false)}}" enable-back-to-top="{{xs.b(i.enableBackToTop,false)}}" bindscrolltoupper="eh" bindscrolltolower="eh" bindscroll="eh" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" enable-flex="{{xs.b(i.enableFlex,false)}}" scroll-anchoring="{{xs.b(i.scrollAnchoring,false)}}" refresher-enabled="{{xs.b(i.refresherEnabled,false)}}" refresher-threshold="{{xs.b(i.refresherThreshold,45)}}" refresher-default-style="{{xs.b(i.refresherDefaultStyle,'black')}}" refresher-background="{{xs.b(i.refresherBackground,'#FFF')}}" refresher-triggered="{{xs.b(i.refresherTriggered,false)}}" enhanced="{{xs.b(i.enhanced,false)}}" bounces="{{xs.b(i.bounces,true)}}" show-scrollbar="{{xs.b(i.showScrollbar,true)}}" paging-enabled="{{xs.b(i.pagingEnabled,false)}}" fast-deceleration="{{xs.b(i.fastDeceleration,false)}}" binddragstart="eh" binddragging="eh" binddragend="eh" bindrefresherpulling="eh" bindrefresherrefresh="eh" bindrefresherrestore="eh" bindrefresherabort="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid}}">
    <block wx:for="{{i.cn}}" wx:key="uid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </scroll-view>
</template>`)
module.exports = {
    parse
}