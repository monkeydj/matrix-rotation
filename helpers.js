var readFileSync = require('fs').readFileSync;

const EOL = require('os').EOL;

module.exports = { EOL, readInputs };

/**
 * read the file & parse into square matrix of numbers
 * @param {string} filePath - path to location of file matrix.txt
 */
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