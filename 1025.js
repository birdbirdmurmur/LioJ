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
    const n = Number(lines[0])
    const m = Number(lines[1])
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            console.log(`${i}*${j}=${i * j}`)
        }
    }
}