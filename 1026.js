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
    let arr = lines[1].split(' ')
    let d = arr[1] / arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] / arr[i - 1] !== d) {
            console.log('No')
            return
        }
    }
    console.log('Yes')
}