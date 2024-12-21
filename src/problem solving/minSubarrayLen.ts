/**
 * Write a function called minSubArrayLen
 * which accepts two parameters - an array of positive integers
 * and a positive integer.
 *
 * This function should return the minimal length of a contiguous subarray
 * of which the sum is greater than or equal to the integer
 * passed to the function. If there isn't one, return 0 instead.
 *
 * @example
 * minSubarrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
 * minSubarrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
 * minSubarrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
 * minSubarrayLen([1,4,16,22,5,7,8,9,10],39) // 3
 * minSubarrayLen([1,4,16,22,5,7,8,9,10],55) // 5
 * minSubarrayLen([4, 3, 3, 5, 6, 2, 3], 11) // 2
 * minSubarrayLen([1,4,16,22,5,7,8,9,10],95) // 0
 */
function minSubarrayLen(nums: number[], target: number): number {
   let left = 0;
   let right = 0;
   let sum = 0;
   let minLen = Infinity;

   while (right < nums.length) {
      // Add the current element to the sum
      sum += nums[right];
      // While the sum is greater than or equal to the target,
      // update the minimum length and move the left pointer
      while (sum >= target) {
         minLen = Math.min(minLen, right - left + 1);
         sum -= nums[left];
         left++;
      }
      // Move the right pointer to the next element
      right++;
   }

   // If no subarray was found, return 0
   return minLen === Infinity ? 0 : minLen;
}

console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubarrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubarrayLen([4, 3, 3, 5, 6, 2, 3], 11)); // 2
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
