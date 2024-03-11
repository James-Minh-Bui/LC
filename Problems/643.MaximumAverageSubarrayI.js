// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

var findMaxAverage = function(nums, k) {
    let start = nums.slice(0,k)
    let curr = start.reduce((a, b) => {
        return a + b;
    });
    let max = curr/k
    for (let i = k; i < nums.length+1; i++) {
        console.log(curr)
        curr += nums[i] - nums[i-k];
        if (curr/k > max) max = curr/k
    }
    return max
};