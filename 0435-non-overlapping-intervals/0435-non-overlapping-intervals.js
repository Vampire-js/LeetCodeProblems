/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1])
    
    let end = -Infinity
    let keep = 0
    for(let i=0 ;  i<intervals.length; i++){
        if(intervals[i][0] >= end){
            keep ++
            end = intervals[i][1]
        }
    }

    return intervals.length - keep
};