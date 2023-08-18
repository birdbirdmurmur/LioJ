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
    let name = []
    let score = []
    let max = 0
    for (let i = 1; i <= n; i++) {
        name.push(lines[i].split(' ')[0])
        score.push(Number(lines[i].split(' ')[1]))
    }
    for (let i = 0; i < score.length - 1; i++) {
        // let max = 0
        if (score[i] >= score[i + 1]) {
            max = score[i]
        } else {
            max = score[i + 1]
        }
    }
    for (let i = 0; i < score.length; i++) {
        if (max === score[i]) {
            console.log(name[i])
        }
    }
}

lines = ['3', 'Nick 8', 'Peter 5', 'Nic 100']
// lines = ['3', 'Nick 90', 'Peter 90', 'Bob 80']

