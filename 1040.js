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
    const c = lines[0]
    let result = ''
    for (let i = 2; i < lines.length; i++) {
        if (i === lines.length - 1) {
            result += lines[i]
        } else
            result += lines[i] + c
    }
    console.log(result)
}

lines = [',', '3', '1', '2', '3']
// lines = ['!!', '3', '1', '2', '3']