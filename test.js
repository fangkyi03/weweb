function parse(str) {
  let input = str.replace(/[\r\n]/g, "");
  let pos = 0;
  const ast = {
    children: [],
    parent: {},
    type: "root",
  };
  let current = ast;
  let isOpen = false;
  let isClose = false;
  let openPos = 0;
  let text = "";
  let char = "";
  function getAttr(str) {
    const content = str.toLowerCase();
    const firstEmpty = content.indexOf(' ')
    const name = content.slice(0, firstEmpty + 1)
    if (firstEmpty === -1) {
      return {
        name:content,
        attr:{},
        state:'success'
      }
    } else {
        const attr = {};
        const attrStr = content.slice(firstEmpty + 1).replace(/^\s+|\s+$/g, "");
        const attrArr = attrStr.trim().match(/[a-zA-Z0-9\-]+=\"(.*?)\"/)
        const state = attrArr.every((item) => {
            const [key, value] = item.split(`="`);
            if (value) {
                const first = value[0]
                const end = value[value.length - 1]
                if ((first === '"' && end === '"') || (first === "'" && end === "'")) {
                    attr[key] = value
                    return true
                }
            }
            return false
        });
        if (!state) {
            return {
                state:'fail'
            }
        }else {
            return {
                name,
                attr,
                state:'success'
            }
        }
    }
  }
  function addNode({name,attr,type} = {}) {
    const obj = {
        type,
        children: [],
        attr,
        name
    }
    current.children.push(obj);
    current = obj
  }
  while (pos < input.length) {
    char = input.slice(pos);
    // 1.如果< 先出来的话 这个时候 要先判断
    // 下一个>的位置 其次要判断在>的位置中是否还有出现过<这个符号 如果有的话 说明当前找的>还不是闭合
    // 如果没有出现过< 说明是闭合的
    // 如果是闭合的话 就要把当前的节点添加到父节点中
    // 2.将<> 两者之间的数值提取出来 再去判断一下属性是否符合要求 如果符合就说明是完全闭合 如果不符合说明是表达式而不是jsx
    // 如果是表达式的话 就要把表达式提取出来 并且把表达式添加到父节点中
    // 其次如果是闭合的话 就把>与<中间的内容部分提取出来 这部分内容肯定是文本节点
    // 3.如果是文本节点的话 就把文本节点添加到父节点中
    if (input[pos] == "<") {
      const findNextRight = input.slice(pos + 1).indexOf(">");
      // 如果当前找到了下一个> 则提取中间的属性判断是否符合要求
      if (findNextRight != -1) {
        const {state,name,attr} = getAttr(input.slice(pos + 1, pos + findNextRight + 1));
        if (state == 'fail') {       
            left = pos   
            pos += findNextRight + 1;
        }else {
            pos += findNextRight + 1;
            left = -1
            addNode({name,attr,type:'node'});
        }
      }
    }else if (input[pos] == ">") {
        if (left != -1) {
            const {state,name,attr} = getAttr(input.slice(left + 1, pos ));
            console.log('object')
        }
    }
    pos +=1
  }
  return ast;
}

parse(`
<div class="a =='1' ? 1 : 2" >
<wxs>
 var _h = () => {
     return s > 1 ? x < 1: 0
 }
</wxs>
</div>
`);
module.exports = {
  parse,
};
