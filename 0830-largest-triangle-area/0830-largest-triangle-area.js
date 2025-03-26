/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let ans = -Infinity;
    for(let i=0; i<points.length; i++){
    for(let j=i+1; j<points.length;j++){
    for(let k=j+1; k<points.length; k++){
        let x1 = points[i][0]
        let y1 = points[i][1]

        let x2 = points[j][0]
        let y2 = points[j][1]
        
        let x3 = points[k][0]
        let y3 = points[k][1]

        ans = Math.max(ans, 0.5*Math.abs(x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2)))
    } 
    }
    }
    return ans
};