/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let high =0
  let low = matrix.length -1

  while(high < low){
    for(let i=0; i<matrix.length; i++){
        let a = matrix[high][i]
        matrix[high][i] = matrix[low][i]
        matrix[low][i] = a
    }

    high ++
    low --
  }

  for(let i = 0; i< matrix.length; i++){
  for(let j = i+1; j< matrix.length; j++){
    let a = matrix[i][j]
    matrix[i][j] = matrix[j][i]
    matrix[j][i] = a
  }
  }
    
};