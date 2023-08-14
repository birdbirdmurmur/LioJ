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
        let x1 = Number(lines[4 * i - 3])
        let y1 = Number(lines[4 * i - 2])
        let x2 = Number(lines[4 * i - 1])
        let y2 = Number(lines[4 * i])
        let result = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
        console.log(result.toFixed(2))
    }
}


lines = ['2', '1', '1', '2', '2', '3', '3', '4', '4']