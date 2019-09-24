const EOL = require('os').EOL;
const rotate = require('./index');

var kTimes = Number(process.argv[2]) || 0;

var matrix = [
    [0, 2, 3, 4],
    [5, 0, 7, 8],
    [9, 10, 0, 12],
    [13, 14, 15, 0]
], rotated = rotate(matrix, kTimes);

console.log('before:' + EOL, matrix);
console.log(`after rotated ${kTimes} times:${EOL}`, rotated);

