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
    let a = Number(lines[1])
    let b = Number(lines[2])
    let result = ''
    for (let i = a; i < b; i++) {
        result += n[i]
    }
    console.log(result)
}

lines = ['abcdefg', '2', '5']

