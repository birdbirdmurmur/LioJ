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
    let temp = lines[0].split(' ');
    let n = Number(temp[0]);
    let m = Number(temp[1]);

    for (let i = n; i <= m; i++) {
        if (isNarcissistic(i)) {
            console.log(i);
        }
    }
}

function isNarcissistic(n) {
    let m = n;
    let digits = 0;
    let temp = n;
    while (temp !== 0) {
        temp = Math.floor(temp / 10);
        digits++;
    }

    let sum = 0;
    temp = n;
    while (temp !== 0) {
        let num = temp % 10;
        sum += num ** digits;
        temp = Math.floor(temp / 10);
    }

    return sum === n;
}