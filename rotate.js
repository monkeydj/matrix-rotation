const { EOL, readInputs } =  require('./helpers');
const MATRIX_FILE = `${__dirname}/matrix.txt`;

var matrix = readInputs(MATRIX_FILE);
var kTimes = Number(process.argv[2]) || 0;

console.log('before:' + EOL, matrix);

while (kTimes-- > 0) matrix = rotate90(matrix);

console.log(`after rotated ${kTimes} times:${EOL}`, matrix);

/**
 * rotate matrix by 90 degrees clockwise
 * @param {string[]} matrixSqr - loaded data from matrix.txt
 */
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