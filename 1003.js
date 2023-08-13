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
    const n = Number(lines[0]);
    let str = "";

    for (let i = 1; i <= n; i++) {
        str += lines[i];
    }

    const m = Number(lines[n + 1]);
    let result = "";

    for (let j = n + 2; j < n + 2 + m; j++) {
        const index = Number(lines[j]) - 1;
        result += str[index];
    }
    console.log(result);
}