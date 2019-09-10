const EOL = require('os').EOL;
const MATRIX_FILE = `${__dirname}/matrix.txt`;

var readFileSync = require('fs').readFileSync;

function rotate90(matrixSqr) {

    var i = 0, j = 0, nLen = matrixSqr.length;

    while (i < nLen && j < nLen) { 

        let tmp = matrixSqr[i][j];
        let ri = nLen - 1 - i;
        let rj = nLen - 1 - j;
        
        matrixSqr[i][j] = matrixSqr[rj][i];
        matrixSqr[rj][i] = matrixSqr[ri][rj];
        matrixSqr[ri][rj] = matrixSqr[j][ri];
        matrixSqr[j][ri] = tmp;

        if (++j >= ri) j = ++i; // go inwards to the center of matrix
        if (i >= nLen / 2) break; // reach the center of matrix

    }

    return matrixSqr;

}

function readInputs(filePath) {

    var file = readFileSync(filePath, { encoding: 'utf8' });
    var matrix = file.split(EOL);

    for (let i = 0, nLen = matrix.length; i < nLen; i++) { 

        let row = matrix[i].trim().split(/\s+/g); 

        if (nLen != row.length) { 
            throw new Error('The program cannot process a non-square matrix!');
        }

        matrix[i] = row.map(Number);

    }

    return matrix;

}


var matrix = readInputs(MATRIX_FILE);
var kTimes = Number(process.argv[2]) || 0;

console.log('before:' + EOL, matrix);

while (kTimes-- > 0) matrix = rotate90(matrix);

console.log(`after rotated ${kTimes} times:${EOL}`, matrix);