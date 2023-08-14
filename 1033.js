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
    let n = Number(lines[0])
    let points = []

    for (let i = 1; i < lines.length; i++) {
        let a = lines[i].split(' ')
        points.push({ x: Number(a[0]), y: Number(a[1]) }
        )
    }

    let min = Infinity
    let ans = null

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let dis = distance(points[i].x, points[i].y, points[j].x, points[j].y)
            if (dis < min) {
                min = dis
                ans = { x1: points[i].x, y1: points[i].y, x2: points[j].x, y2: points[j].y }
            }
        }
    }

    if (ans.x1 > ans.x2) {
        console.log(ans.x2 + ' ' + ans.y2)
        console.log(ans.x1 + ' ' + ans.y1)
    } else if (ans.x1 < ans.x2) {
        console.log(ans.x1 + ' ' + ans.y1)
        console.log(ans.x2 + ' ' + ans.y2)
    } else {
        if (ans.y1 > ans.y2) {
            console.log(ans.x2 + ' ' + ans.y2)
            console.log(ans.x1 + ' ' + ans.y1)
        } else {
            console.log(ans.x1 + ' ' + ans.y1)
            console.log(ans.x2 + ' ' + ans.y2)
        }
    }
}

function distance(x1, y1, x2, y2) {
    let dis = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2))
    return dis
}

lines = ['4', '2 3', '1 3', '1 2', '1 1']
// lines = ['4', '2 2', '1 1', '10 10', '100 100']