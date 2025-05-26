/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const space = '.';
    const Q = 'Q';
    const board = Array.from({ length: n }, () => Array(n).fill(space));
    const ans = [];

    function isValid(row, col, b) {
        for (let i = 0; i < row; i++) {
            if (b[i][col] === Q) return false;
        }

        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (b[i][j] === Q) return false;
        }

        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (b[i][j] === Q) return false;
        }

        return true;
    }

    function solve(row, b) {
        if (row === n) {
            ans.push(b.map(r => r.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col, b)) {
                b[row][col] = Q;
                solve(row + 1, b);
                b[row][col] = space; 
            }
        }
    }

    solve(0, board);

    return ans;
};
