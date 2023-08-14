// Basic
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

// Here
function solve(lines) {
    let card = lines[0].split('-').join('')
    let odd = 0
    let even = 0

    // even
    for (let i = 1; i < 14; i += 2) {
        even += Number(card[i])
    }
    // odd
    for (let j = 0; j < 15; j += 2) {
        if (Number(card[j]) * 2 >= 10) {
            odd += (Number(card[j]) * 2 - 9)
        } else {
            odd += Number(card[j]) * 2
        }
    }
    let p = (odd + even) % 10

    if (p != 0) {
        p = 10 - p
    }

    if (p != Number(card[15])) {
        console.log('INVALID')
    } else {
        if (Number(card[0]) === 5) {
            console.log('MASTER_CARD')
        } else {
            console.log('VISA')
        }
    }
}


lines = ['5412-3456-7890-1232']

solve(lines)