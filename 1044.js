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
    let s = lines[0]
    let l = Number(lines[1])
    let w = lines[2]
    let result = s

    if (s.length >= l) {
        return console.log(s)
    }

    let n = 0
    while (result.length < l) {
        result += w[n]
        n++
        if (n === w.length) {
            n = 0
        }
    }
    console.log(result)
}


lines = ['abcde', '10', 'xyz']

