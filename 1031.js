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
    let sum = 0
    for (let i = 1; i <= n; i++) {
        if (i ** 2 < n) {
            sum += i ** 2
        }
    }
    console.log(sum)
}

lines = ['30']
solve(lines)