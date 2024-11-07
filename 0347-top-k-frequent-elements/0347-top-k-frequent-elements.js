/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 function topKFrequent(nums, k) {
        let map = new Map()

        for(let i=0;i<nums.length;i++){
            if(!map.has(nums[i])){
                map.set(nums[i] , 0)
            }
            map.set(nums[i] ,map.get(nums[i]) + 1)
        }

        let arr = Array.from(map.entries()).map(([num, f]) => [f , parseInt(num)])
arr.sort((a, b) => b[0] - a[0]);

        return arr.splice(0,k).map(e => e[1])
    }