// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

var moveZeroes = function(nums) {
    let p1 = 0
    let p2 = 0
    while(p2 < nums.length) {
        if (nums[p1] === 0 && nums[p2] !== 0) {
            nums[p1] = nums[p2]
            nums[p2] = 0
        }
        if (nums[p1] !== 0) {
            p1 += 1
            if (p1 > p2) p2 = p1
        }
        else p2 += 1 
    }
    return nums
};