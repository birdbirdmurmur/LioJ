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
    let n = lines[0].split(' ').join('')
    let num = 0
    for (let i = 0; i < n.length; i++) {
        num += Number(n[i])
        if (num >= 10) {
            num = + Math.floor(num / 10) + (num % 10)
        }
    }
    console.log(num)
}

lines = ['1991 11 7']
solve(lines)