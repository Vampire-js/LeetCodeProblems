/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let dummy = Array.from({ length: matrix.length }, () => Array(matrix.length).fill(0));

    for(let  i=0; i<dummy.length; i++){
        for(let  j=0; j<dummy.length; j++){
        let targetRow = dummy.length -1 - i
        dummy[j][targetRow] = matrix[i][j]
        }
    }


    for(let  i=0; i<dummy.length; i++){
        for(let  j=0; j<dummy.length; j++){
            matrix[i][j] = dummy[i][j]
        }
    }
    
};