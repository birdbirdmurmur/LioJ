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
    let x = (lines[0].split(' '))
    let n = Number(x[0]) //5
    let m = Number(x[1]) //3
    let arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = Number(lines[i + 1])
    }
    for (let i = n + 1; i < n + 1 + m; i++) {
        let q = Number(lines[i])
        console.log(search(arr, q))
    }
}

function search(arr, q) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === q) {
            return i
        }
    }
    return -1
}


lines = ['5 3', '1', '2', '3', '4', '5', '100', '3', '6']

