var readline = require('readline');

var lines = []
var rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', function (line) {
    lines.push(line)
});

rl.on('close', function () {
    solve(lines)
})

function solve(lines) {
    for (let i = 0; i < lines.length; i++) {
        let num = Number(lines[i]);

        if (num === 0) {
            break
        }

        let sum = result(num)
        let check = result(sum)

        if (num === check && num !== sum) {
            console.log(sum);
        } else {
            console.log('QQ');
        }
    }
}

function result(number) {
    let sum = 0;
    for (let j = 1; j <= number / 2; j++) {
        if (number % j === 0) {
            sum += j;
        }
    }
    return sum;
}