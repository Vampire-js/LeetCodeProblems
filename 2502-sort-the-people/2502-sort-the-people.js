/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {


    let data = []
    let ans = []
        for(let i =0; i<heights.length ;i++){
            data.push({
                name: names[i],
                height: heights[i]
            })
        }
        data.sort((a,b) => b.height - a.height )
        
        for(let i= 0; i<data.length; i++){
            ans.push(data[i].name)
        }
        return ans
        
    
    };
    