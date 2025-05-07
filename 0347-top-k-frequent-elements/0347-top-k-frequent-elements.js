/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);
        this._heapifyUp();
    }

    pop() {
        if (this.size() === 0) return null;
        const top = this.peek();
        const end = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = end;
            this._heapifyDown();
        }
        return top;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let idx = this.size() - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent][0] <= this.heap[idx][0]) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }

    _heapifyDown() {
        let idx = 0;
        const length = this.size();
        const element = this.heap[0];

        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let smallest = idx;

            if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left;
            }

            if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
                smallest = right;
            }

            if (smallest === idx) break;
            [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
            idx = smallest;
        }
    }
}


var topKFrequent = function(nums, k) {
  const freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    const minHeap = new MinHeap();
    for (const [num, count] of freqMap.entries()) {
        minHeap.push([count, num]);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }

    const result = [];
    while (minHeap.size()) {
        result.push(minHeap.pop()[1]);
    }

    return result;  
};