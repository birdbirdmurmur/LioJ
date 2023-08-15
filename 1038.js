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
    for (let i = 2; i < lines.length; i++) {
        if (Number(lines[i]) === n) {
            console.log(i - 2)
            return
        }
    }
    console.log(-1)
}


lines = ['3', '5', '1', '2', '3', '3', '3']