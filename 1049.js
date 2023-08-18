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
    let x = lines[1].split(' ').map(Number)
    let y = lines[2].split(' ').map(Number)
    let min = Infinity

    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < y.length; j++) {
            const diff = Math.abs(x[i] - y[j])
            min = Math.min(min, diff)
        }
    }
    console.log(min)
}

lines = ['5 5', '1 9 12 15 18', '3 6 10 11 12']

