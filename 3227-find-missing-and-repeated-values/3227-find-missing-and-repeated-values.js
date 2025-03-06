/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let map = {}
    let ans = []
    let total = grid.length*grid[0].length

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            map[grid[i][j]] = (map[grid[i][j]] | 0) + 1
            if(map[grid[i][j]] > 1) ans[0] = grid[i][j]
        }
    }
    for(let i=1; i<=total; i++){
        if(!map[i]) ans[1] = i
    }

    return ans

};