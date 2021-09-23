const zeroMatrix = require('../1.8.js');

const walkThroughEquals = (A, B) => {
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if(A[i][j] !== B[i][j]){
                return false;
            }
        }
    }
    return true;
}

test("Matrix with no 0's should not change", () => {
    let arr = [
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1]
    ];
    let copy = [...arr];
    zeroMatrix(arr);

    expect(walkThroughEquals(arr, copy)).toBeTruthy;

});

test("Empty matrix should return null", () => {
    expect(zeroMatrix()).toBeNull();
});

test("Matrix with all zeros should return an array with all zeros", () => {
    let arr = [[0,0,0],
                [0,0,0],
                [0,0,0]
                    ];

    zeroMatrix(arr);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            expect(arr[i][j]).toBe(0);
        }
    }
})

test("Should be able to rotate Matrix with equal deminsions", () => {
    let before = [
                    [0,1,1],
                    [1,1,1],
                    [1,0,1]
                ];
    let after = [
                    [0,0,0],
                    [0,0,1],
                    [0,0,0]
                ];
    zeroMatrix(before);

    walkThroughEquals(before, after);
});

test("Should be able to rotate Matrix with different deminsions", () => {
    let before = [
        [0,1,1,1,1,1],
        [1,1,1,1,1,1],
        [1,0,1,1,1,0]
    ];
    let after = [
        [0,0,0,0,0,0],
        [0,0,1,1,1,0],
        [0,0,0,0,0,0]
    ];
    zeroMatrix(before);

    walkThroughEquals(before, after);
});