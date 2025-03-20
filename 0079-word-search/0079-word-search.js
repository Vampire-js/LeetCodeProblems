/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let rows = board.length;
    let cols = board[0].length;

    function search(index, x, y, visited) {
        if (index === word.length) return true;

        if (x < 0 || y < 0 || x >= rows || y >= cols || visited[x][y] || board[x][y] !== word[index]) {
            return false;
        }

        visited[x][y] = true;

        let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (let [dx, dy] of directions) {
            if (search(index + 1, x + dx, y + dy, visited)) {
                return true;
            }
        }

        visited[x][y] = false;

        return false;
    }

    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && search(0, i, j, visited)) {
                return true;
            }
        }
    }

    return false;
};
