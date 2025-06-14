/**
 * @param {number[][]} grid
 * @return {number[][]}
 */


var sortMatrix = function (grid) {
    // 2N-1 diagonals astat
    let n = grid.length

    function qs(x, y, state) {
        let diag = [];
        let i = x, j = y;

        while (i < grid.length && j < grid[0].length) {
            diag.push(grid[i][j]);
            i++;
            j++;
        }
        diag.sort((a, b) => (state == 0) ? a - b : b - a);


        i = x;
        j = y;
        for (let k = 0; k < diag.length; k++) {
            grid[i][j] = diag[k];
            i++;
            j++;
        }
    }


    for (let i = 0; i < 2 * n - 1; i++) {

        let x = 0
        let y = i % n
        let triangle = 0
        if (i >= n) {
            let temp = y
            y = x
            x = temp
            triangle = 1
        }
        qs(x, y, triangle)

    }
    return grid
};