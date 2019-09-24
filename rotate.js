const EOL = require('os').EOL;
const rotate = require('./index');

var kTimes = Number(process.argv[2]) || 0;
var matrix = require('./matrix.sample');

var rotated = rotate(matrix, kTimes);

console.log('before:' + EOL, matrix);
console.log(`after rotated ${kTimes} times:${EOL}`, rotated);

