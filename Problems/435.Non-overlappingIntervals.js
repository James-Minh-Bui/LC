// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

 

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// Example 3:

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

var eraseOverlapIntervals = function(intervals) {
    if(intervals.length < 2) return 0;
         intervals.sort((a,b)=>a[0] - b[0]);
         let count = 0 , last_included = 0;
         for(let i =1; i <intervals.length; ++i){
             if(intervals[i][0] < intervals[last_included][1]){
                 count++;
             if(intervals[i][1] < intervals[last_included][1])
             last_included = i;
             }
             else
             last_included = i;
         }
         return count; 
 };
