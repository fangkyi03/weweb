const htmlParser = require('./htmlParser');

const domTree = htmlParser(`
<!doctype html>
<body>
    <div src='123123' data=''>123</div>
</body>
`);

console.log(JSON.stringify(domTree, null, 4));