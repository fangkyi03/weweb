const template = `
<div src='1'>
    <div>
        <span>12312312312312s3</span>
        12313
    </div>
</div>
`
const input = template.replace(/[\r\n]/g, '')
let current = 0
let children = []
function find() {
    let start = -1 
    let end = -1
    while (current < input.length) {
        const char = input[current]
        if (char === '<') {
            start = current

        }else if (char === '>') {
            end = current
        }
        if (start !== -1 && end !== -1) {
            children.push({
                text:input.slice(start, end + 1),
                start,
                end
            })
            start = -1
            end = -1
        }
        current++
    }
    console.log('object')
}

find() 
// function find() {
//     const stack = []
//     const result = []
//     let left = -1
//     let right = -1
//     while (current < input.length) {
//         const char = input[current]
//         if (char === '<') {
//             stack.push(current)
//         } else if (char === '>') {
//             const start = stack.pop()
//             if (stack.length === 0) {
//                 result.push(input.slice(start, current + 1))
//             }
//         }
//         current++
//     }
//     return result
// }

// find()