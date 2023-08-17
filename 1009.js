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
    let str = lines[0]
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    console.log(result)
}

lines = ['abcde']

