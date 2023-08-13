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
    let n = Number(lines[0])
    for (let i = 1; i <= n; i++) {
        console.log(repeat(' ', n - i) + repeat('*', 2 * i - 1))
    }
    for (let i = 1; i <= n - 1; i++) {
        console.log(repeat(' ', n - 1) + '|')
    }
}

function repeat(str, n) {
    let result = ''
    for (let i = 1; i <= n; i++) {
        result += str
    }
    return result
}
