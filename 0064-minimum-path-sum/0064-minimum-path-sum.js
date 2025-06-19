var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const memo = {};

    function dfs(x, y) {
        if (x >= m || y >= n) return Infinity;

        if (x === m - 1 && y === n - 1) return grid[x][y];

        const key = `${x},${y}`;
        if (memo[key] !== undefined) return memo[key];

        memo[key] = grid[x][y] + Math.min(dfs(x + 1, y), dfs(x, y + 1));
        return memo[key];
    }

    return dfs(0, 0);
};
