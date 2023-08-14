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
    for (let i = 0; i < 3; i++) {
        if (lines[i][0] === lines[i][1] && lines[i][1] === lines[i][2]) {
            return console.log(lines[i][0])
        } else if (lines[0][i] === lines[1][i] && lines[1][i] === lines[2][i]) {
            return console.log(lines[0][i])
        }
    }
    if (lines[0][0] === lines[1][1] && lines[1][1] === lines[2][2]) {
        return console.log(lines[0][0])
    }

    if (lines[0][2] === lines[1][1] && lines[1][1] === lines[2][0]) {
        return console.log(lines[0][2])
    }
    return console.log('DRAW')
}

// lines = ['OOO', 'XXO', 'XXO']
lines = ['XXO', 'OXX', 'XOO']