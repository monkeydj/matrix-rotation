// export main functions
module.exports = rotate;
module.exports.rotateOnce = rotate90;

/**
 * rotate a square matrix 90deg clockwise multiple times
 * @param {number[]} sqrMatrix
 * @param {number} times
 */
function rotate(sqrMatrix, times = 0) {
    // since rotating multiples of 4 times results in the same beginning matrix
    // if actualTimes is 0, then there's no rotation happened
    var actualTimes = times % 4, rotated = clone(sqrMatrix);

    while (actualTimes-- > 0) rotated = rotate90(rotated);

    return rotated;

}

/**
 * rotate matrix by clockwise 90 degrees
 * @param {number[]} sqrMatrix - square matrix of some order n
 */
function rotate90(sqrMatrix) {

    var i = 0, j = 0, nLen = sqrMatrix.length;

    while (i < nLen && j < nLen) {

        let tmp = sqrMatrix[i][j];
        let ri = nLen - 1 - i;
        let rj = nLen - 1 - j;

        sqrMatrix[i][j] = sqrMatrix[rj][i];
        sqrMatrix[rj][i] = sqrMatrix[ri][rj];
        sqrMatrix[ri][rj] = sqrMatrix[j][ri];
        sqrMatrix[j][ri] = tmp;

        // ? uncomment below line to see data of each step
        // console.log(sqrMatrix);

        if (++j >= ri) j = ++i; // go inwards to the center of matrix
        if (i >= nLen / 2) break; // reach the center of matrix

    }

    return sqrMatrix;

}

/**
 * silly deep copy of passed 2d array
 * @param {string[]} arr
 */
function clone(arr) {
    return JSON.parse(JSON.stringify(arr));
}