/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length <= 2) return points.length;

    let max = 1;


let findSlope = function (p1, p2) {
        let [x1,y1] = p1
        let [x2,y2] = p2
if(x2-x1 == 0) return "i"
        return (y2-y1)/(x2-x1)
    }

    for (let i = 0; i < points.length - 1; i++) {
        let map = {};
        let localMax = 0;

        for (let j = i + 1; j < points.length; j++) {
            const slope = findSlope(points[i], points[j])
            map[slope] = (map[slope] || 0) + 1;
            localMax = Math.max(localMax, map[slope]);
        }

        max = Math.max(max, localMax + 1);

        if (max >= points.length - i) break;
    }

    return max;
};
