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
    let result = []
    for (let i = 2; i < lines.length; i++) {
        result.push(n)
    }
    for (let i = 0; i < result.length; i++) {
        console.log(result[i])
    }
}

lines = ['10', '3', '1', '2', '3']

