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
    const bag = Number(lines[0])
    const item = Number(lines[1]) // 3: 01 234 
    const num = []
    let sum = 0

    for (let i = 0; i < item; i++) {
        num.push(Number(lines[i + 2]))
    }
    for (let i = 0; i < item - 1; i++) {
        for (let j = 0; j < item - i - 1; j++) {
            if (num[j] < num[j + 1]) {
                const temp = num[j];
                num[j] = num[j + 1];
                num[j + 1] = temp;
            }
        }
    }
    for (let i = 0; i < bag && i < item; i++) {
        sum += num[i]
    }
    console.log(sum)
}