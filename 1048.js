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
    let arr = []
    for (let i = 1; i < lines.length; i++) {
        arr.push(Number(lines[i]))
    }
    let currentNum = 0
    let maxNum = 0

    for (const num of arr) {
        currentNum = Math.max(0, num + currentNum)
        maxNum = Math.max(maxNum, currentNum)
    }

    console.log(maxNum)
}


lines = ['5', '2', '-3', '5', '-3', '7']

