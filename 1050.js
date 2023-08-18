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
    let [n, t] = lines[0].split(' ').map(Number)
    let arr = lines[1].split(' ').map(Number)

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === t) {
                console.log(i, j)
            }
        }
    }
}

lines = ['5 3', '1 7 9 8 2']

