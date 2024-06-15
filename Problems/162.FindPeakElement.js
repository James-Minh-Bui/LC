// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 

var findPeakElement = function(nums) {
    if(nums.length === 1) return 0;
    
    const recursion = (startIndex, endIndex) => {
       const midIndex = Math.floor((startIndex + endIndex)/2);          
  
       if (startIndex === endIndex) return startIndex;
       if (startIndex + 1 === endIndex) {
          return nums[endIndex] >= nums [startIndex] ? endIndex : startIndex;
       }
  
       
       if(nums[midIndex] > nums[midIndex-1] && nums[midIndex] > nums[midIndex+1]) return midIndex;
       if(nums[midIndex] > nums[midIndex-1] && nums[midIndex] < nums[midIndex+1]) return recursion(midIndex + 1, endIndex);
       if(nums[midIndex] < nums[midIndex-1] && nums[midIndex] > nums[midIndex+1]) return recursion(startIndex, midIndex - 1);
       if(nums[midIndex] < nums[midIndex-1] && nums[midIndex] < nums[midIndex+1]) 
          return nums[midIndex-1] > nums[midIndex+1] ? recursion(startIndex, midIndex - 1) : recursion(midIndex + 1, endIndex);
       
    }
    
    return recursion(0, nums.length - 1);
  };