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
    let a = Number(lines[0])
    let b = Number(lines[1])
    if (a >= b) {
        console.log(a * 2)
        console.log(a * 2 - a - b)
    } else {
        console.log(b * 2)
        console.log(b * 2 - a - b)
    }
}

lines = ['35', '25']

