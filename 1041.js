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
    let result = ''
    let del = ' '
    let prev = false
    let curr = false

    for (let i = 0; i < n.length; i++) {
        if (n[i] !== del || prev) {
            prev = true
            result += n[i]
        }
    }
    let ans = ''
    for (let i = result.length - 1; i >= 0; i--) {
        if (result[i] !== del || curr) {
            curr = true
            ans = result[i] + ans
        }
    }

    console.log(ans)
}

// lines = ['      a b c']
lines = ['  abc  ']