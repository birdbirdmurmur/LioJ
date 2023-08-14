// Basic
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

// Here
function solve(lines) {
    let n = lines[0].split(' ')
    let a = Number(n[0])
    let b = Number(n[2])
    let symbol = n[1]
    if (symbol === '*') {
        console.log(a * b)
    } else if (symbol === '/') {
        console.log(a / b)
    } else if (symbol === '+') {
        console.log(a + b)
    } else {
        console.log(a - b)
    }
}

lines = ['3 * 4']
solve(lines)