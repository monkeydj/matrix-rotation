const ROTATE_DEG = 90;
const EOL = require('os').EOL;

var readFileSync = require('fs').readFileSync;

function rotate90(matrixSqr) {

}

function readInputs(filePath) {

    var file = readFileSync(filePath, { encoding: 'utf8' });
    var [kTimes, ...matrix] = file.split(EOL);

    for (let i = 0, nLen = matrix.length; i < nLen; i++) { 

        let row = matrix[i].split(/\s+/g); 

        if (nLen != row.length) { 
            throw new Error('The program cannot process a non-square matrix!');
        }

        matrix[i] = row.map(Number);

    }

    return { kTimes: kTimes || 0, matrix };

}

var feedingFile = `${__dirname}/matrix.txt`;

var { kTimes, matrix } = readInputs(feedingFile);

console.log('before:' + EOL, matrix);

while (--kTimes > 0) matrix = rotate90(matrix);

console.log('after rotated:' + EOL, matrix);