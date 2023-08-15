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
    const n = Number(lines[0])
    const result = []

    for (let i = 1; i <= n; i++) {
        result.push(Number(lines[i]))
    }

    result.sort((a, b) => a - b)

    for (let i = 0; i < result.length; i++) {
        console.log(result[i])
    }
}

lines = ['5', '1', '7', '4', '9', '5']