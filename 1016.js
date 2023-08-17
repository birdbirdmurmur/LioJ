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
    let a = []
    let b = []
    for (let i = 1; i <= n; i++) {
        if (lines[i] === 'A') {
            a.push(i)
        } else if (lines[i] === 'B') {
            b.push(i)
        }
    }
    if (a.length === b.length || a.length === 0 || b.length === 0) {
        console.log('PEACE')
    }

    if (a.length < b.length) {
        for (let i = 0; i < a.length; i++) {
            console.log(a[i])
        }
    } else if (a.length > b.length) {
        for (let i = 0; i < b.length; i++) {
            console.log(b[i])
        }
    }
}

lines = ['6', 'A', 'A', 'A', 'A', 'A', 'A']

