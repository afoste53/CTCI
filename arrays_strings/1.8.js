/**
 * Write an alogrithm such that if an element in an NxM matrix is 0,
 * its entire row and column are set to 0.
 *
 * @param A
 * @returns A
 */

function zeroMatrix(A) {
    if(!A){
        return null;
    }
    let zeros = [];

    let N = A.length;
    let M = A[0].length;


    // find all zeros and add them as an {i,j} object to zeros array
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (A[i][j] === 0) {
                zeros.push({i, j});
            }
        }
    }

    // check if zero array is empty, ie. no zeros, and return A if so
    if (zeros.length === 0) {
        return A;
    }

    zeros.forEach(z => {
        // for each 0 set every other element in the row to 0
        for (let k = 0; k < M; k++) {
            let tIndex = z.i;
            A[z.i][k] = 0;
        }

        // for each 0 set every other element in the column to 0
        for (let k = 0; k < N; k++) {
            A[k][z.j] = 0;
        }
    });
    return A;

}

module.exports = zeroMatrix;