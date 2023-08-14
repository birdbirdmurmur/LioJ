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
    let n = lines[0]
    for (let i = 0; i < n.length; i++) {
        if (n[i] !== n[n.length - 1 - i]) {
            console.log('False')
            return
        }
    }
    console.log('True')
}

lines = ['abbbc']
solve(lines)