var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});

var lines = []

rl.on('line', function (line) {
    lines.push(line)
});

rl.on('close', function () {
    solve(lines)
})

function solve(lines) {
    let n = lines[0]
    let k = lines[1]
    for (let i = 0; i < k.length; i++) {
        if (n[n.length - 1 - i] !== k[k.length - 1 - i]) {
            return console.log('false')
        }
    }
    console.log('true')
}

lines = ['abcde', 'fe']
// lines = ['aaa', 'a']

