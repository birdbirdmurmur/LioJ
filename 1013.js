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
    let n = Number(lines[0])
    let arr = [0, 1]
    for (let i = 1; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i])
    }
    console.log(arr[n])
}

lines = ['5'] // １２３４５

