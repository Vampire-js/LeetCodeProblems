/**
 * @param {number} numRows
 * @return {number[][]}
 */


var generate = function (numRows) {
    if (numRows == 1) return [[1]]
    if (numRows == 2) return [[1], [1, 1]]
    let triangle = [[1], [1, 1]]
    for (let i = 2; i < numRows; i++) {
        triangle.push(getRow(triangle[i - 1]))
    }
    return triangle
};

function getRow(arr){
    let a = [1]
    for(let i = 0; i<arr.length; i++){
        if(arr[i+1]){
            let sum = arr[i] + arr[i+1]
            a.push(sum)
        }
        
    }
    a.push(1)

    return a
    }
