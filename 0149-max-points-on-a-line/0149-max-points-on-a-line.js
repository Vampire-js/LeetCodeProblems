/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    
   let findSlope = function (p1, p2) {
        let num = p2[1] - p1[1]
        let denom = p2[0] - p1[0]
    if(denom == 0) return "i"
        return num/denom
    }
    let max = 1

    for(let x =0; x < points.length; x++){
        let map = {}
        for(let y = x + 1; y < points.length; y++){
            let slope = findSlope(points[x], points[y])
            map[slope] = 1 + (map[slope] || 0 ) 

        }
        
        for (let [slope, value] of Object.entries(map)) {
            max = Math.max(max, value + 1)
        }
        
    }

   return max
}