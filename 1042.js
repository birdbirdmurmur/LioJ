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
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''

    for (let i = 0; i < lines[0].length; i++) {
        let str = lines[0][i]
        for (let j = 0; j < 26; j++) {
            if (str === upper[j]) {
                str = lower[j]
                break
            }
        }
        result += str
    }
    console.log(result)
}

lines = ['AbC!!']
