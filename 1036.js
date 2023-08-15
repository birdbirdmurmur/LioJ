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
    let num = []
    for (let i = 1; i < lines.length; i++) {
        num.push(lines[i])
    }
    let arr = reverse(num)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

function reverse(arr) {
    let n = []
    for (let i = arr.length - 1; i >= 0; i--) {
        n.push(arr[i])
    }
    return n
}

lines = ['3', '1', '2', '3']