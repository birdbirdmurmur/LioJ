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
    let temp = lines[0].split(' ')
    let n = Number(temp[0])
    let m = Number(temp[1])
    if (n === m) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}