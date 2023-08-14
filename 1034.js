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
    const offset = Number(lines[0])
    const word = lines[1]
    let result = ''
    let alphabet = 'abcdefghijklmnopqrstuvwxyz' //index:0-25

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (word[i] == alphabet[j]) {
                let index = j + offset
                if (index >= 26) {
                    index = index % 26
                }
                result += alphabet[index]
                break
            }
        }
    }
    console.log(result)
}

// lines = ['10', 'xray']
lines = ['1', 'apple']