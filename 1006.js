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
    let arr = []
    let del = []
    for (let i = 2; i < Number(lines[1]) + 2; i++) {
        del.push(Number(lines[i]))
    }

    for (let i = 1; i <= n - 1; i++) {
        if (i % 2 === 1) {
            arr.push([i, i + 1])
            if (i + 2 < n) {
                arr.push([i, i + 2])
            }
        } else if (i % 2 === 0 && i !== n) {
            arr.push([i, i + 2])
        }
    }

    console.log(arr)
}

lines = ['8', '2', '4', '5']
// lines = ['4', '1', '1']

