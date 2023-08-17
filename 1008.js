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
    let x = 1
    let count = 0

    while (n > 0) {
        if (n > x) {
            x *= 2
            if (x > n) {
                n -= x / 2
                count++
                x = 1
            }
        }
        else if (n === x) {
            n -= x
            count++
        }
    }
    console.log(count)
}

lines = ['64']

