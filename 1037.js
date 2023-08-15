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
    let result = []
    for (let i = 2; i < lines.length; i++) {
        if (Number(lines[i]) !== Number(lines[0])) {
            result.push(Number(lines[i]))
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i])
    }
}


lines = ['3', '5', '1', '3', '3', '2', '8']