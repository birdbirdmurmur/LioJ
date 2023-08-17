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
    let n = lines[0]
    let arr = lines[1].split(' ')
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += Number(arr[i])
    }
    if ((sum / n) >= 183) {
        console.log('real')
    } else {
        console.log('fake')
    }
}

lines = ['5', '180 181 182 183 184']

