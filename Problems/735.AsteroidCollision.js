// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

// Example 1:

// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
// Example 2:

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.
// Example 3:

// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

var asteroidCollision = function(asteroids) {
    const n = asteroids.length;
   const data = new Array(n).fill(null);
   let head = -1;

   for (const i of asteroids) {
     if (i > 0) {
       head++;
       data[head] = i;
       continue;
     } else {
       let alive = true;
       while (head >= 0 && data[head] > 0) {
         if (data[head] > Math.abs(i)) {
           alive = false;
           break;
         } else if (data[head] === Math.abs(i)) {
           head--;
           alive = false;
           break;
         }
         head--;
       }

       if (alive) {
         head++;
         data[head] = i;
       }
     }
   }

   const size = head + 1;
   const ans = data.slice(0, size);
   return ans;
};