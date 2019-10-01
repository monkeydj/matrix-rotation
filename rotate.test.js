const rotate = require('./index');

var inputs = {
    square4: [
        [0, 2, 3, 4],
        [5, 0, 7, 8],
        [9, 10, 0, 12],
        [13, 14, 15, 0],
    ],
    square5: [
        [0, 12, 13, 14, 15],
        [21, 0, 23, 24, 25],
        [31, 32, 0, 34, 35],
        [41, 42, 43, 0, 45],
        [51, 52, 53, 54, 0]
    ]
};

describe('rotate a 4-by-4 matrix', () => {

    test('1 times', () => {
        let output = [
            [13, 9, 5, 0],
            [14, 10, 0, 2],
            [15, 0, 7, 3],
            [0, 12, 8, 4],
        ];
        expect(rotate(inputs.square4, 1)).toStrictEqual(output);
    });

    test('2 times', () => {
        let output = [
            [0, 15, 14, 13],
            [12, 0, 10, 9],
            [8, 7, 0, 5],
            [4, 3, 2, 0],
        ];
        expect(rotate(inputs.square4, 2)).toStrictEqual(output);
    });

    test('3 times', () => {
        let output = [
            [4, 8, 12, 0],
            [3, 7, 0, 15],
            [2, 0, 10, 14],
            [0, 5, 9, 13],
        ];
        expect(rotate(inputs.square4, 3)).toStrictEqual(output);
    });

    test('4 times', () => {
        // as 4 times of rotation yields the original matrix
        let output = Array.from(inputs.square4);
        expect(rotate(inputs.square4, 4)).toStrictEqual(output);
    });

});

describe('rotate a 5-by-5 matrix', () => {

    test('1 times', () => {
        let output = [
            [51, 41, 31, 21, 0],
            [52, 42, 32, 0, 12],
            [53, 43, 0, 23, 13],
            [54, 0, 34, 24, 14],
            [0, 45, 35, 25, 15]
        ];
        expect(rotate(inputs.square5, 1)).toStrictEqual(output);
    });

    test('2 times', () => {
        let output = [
            [0, 54, 53, 52, 51],
            [45, 0, 43, 42, 41],
            [35, 34, 0, 32, 31],
            [25, 24, 23, 0, 21],
            [15, 14, 13, 12, 0]
        ];
        expect(rotate(inputs.square5, 2)).toStrictEqual(output);
    });

    test('3 times', () => {
        let output = [
            [15, 25, 35, 45, 0],
            [14, 24, 34, 0, 54],
            [13, 23, 0, 43, 53],
            [12, 0, 32, 42, 52],
            [0, 21, 31, 41, 51],
        ];
        expect(rotate(inputs.square5, 3)).toStrictEqual(output);
    });

    test('4 times', () => {
        let output = Array.from(inputs.square5);
        expect(rotate(inputs.square5, 4)).toStrictEqual(output);
    });

});

describe('0-time rotation won\'t produce any change', () => {

    test('output of 4-by-4 matrix is the same as input', () => {
         let output = Array.from(inputs.square4);
         expect(rotate(inputs.square4, 0)).toStrictEqual(output);
    })

    test('output of 5-by-5 matrix is the same as input', () => {
        let output = Array.from(inputs.square5);
        expect(rotate(inputs.square5, 0)).toStrictEqual(output);
   })

});

describe('rotation with negative times, like -1, won\'t also produce any change', () => {

    test('output of 4-by-4 matrix is the same as input', () => {
         let output = Array.from(inputs.square4);
         expect(rotate(inputs.square4, -1)).toStrictEqual(output);
    })

    test('output of 5-by-5 matrix is the same as input', () => {
        let output = Array.from(inputs.square5);
        expect(rotate(inputs.square5, -1)).toStrictEqual(output);
   })

});