/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if(nums.length < 2) return 0  
    if(nums.length == 2) return Math.abs(nums[0] - nums[1])

 const minVal = Math.min(...nums);
  const maxVal = Math.max(...nums);
  
  const bucketSize = Math.max(1, Math.floor((maxVal - minVal) / (nums.length - 1)));
  const bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;
  const buckets = Array.from({ length: bucketCount }, () => ({ min: Infinity, max: -Infinity }));

  for (const num of nums) {
    const idx = Math.floor((num - minVal) / bucketSize);
    buckets[idx].min = Math.min(buckets[idx].min, num);
    buckets[idx].max = Math.max(buckets[idx].max, num);
  }

  const sorted = [];
  for (const bucket of buckets) {
    if (bucket.min !== Infinity) sorted.push(bucket.min);
    if (bucket.max !== -Infinity && bucket.max !== bucket.min) sorted.push(bucket.max);
  }


let largest = 0
for(let i=0; i<sorted.length-1; i++){
    largest = Math.max(sorted[i+1]-sorted[i], largest)
}

return largest

};