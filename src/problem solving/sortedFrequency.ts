/**
 * Divide and Conquer - sortedFrequency
 * Given a sorted array and a number,
 * write a function called sortedFrequency
 * that counts the occurrences of the number in the array
 *
 * @example
 * sortedFrequency([1,1,2,2,2,2,3],2) // 4
 * sortedFrequency([1,1,2,2,2,2,3],3) // 1
 * sortedFrequency([1,1,2,2,2,2,3],1) // 2
 * sortedFrequency([1,1,2,2,2,2,3],4) // -1
 * Time Complexity - O(log n)
 *
 * @param arr input arr
 * @param val input value
 * @return the number of `val` represent in the `arr`.
 * If it does not have any, return -1
 */

// Time complexity: O(n)
function sortedFrequency(arr: number[], val: number) {
   let left = 0, right = arr.length - 1;
   while (arr[left] !== val && left <= arr.length - 1) {
      if (left === arr.length - 1) return -1
      left++;
   }
   while (arr[right] !== val && right >= left) {
      if (right === left) return 1;
      right--
   }
   return right - left + 1
}

// Time complexity: O(log n)
function sortedFrequency_logn(arr: number[], val: number) {
   function findIdx(arr: number[], val: number, isFindFirst = true) {
      let left = 0, right = arr.length - 1;
      let result = -1
      while (left <= right) {
         const mid = Math.floor((left + right) / 2);
         if (arr[mid] === val) {
            result = mid
            isFindFirst ? right = mid - 1 : left = mid + 1
         } else if (arr[mid] < val) left = mid + 1
         else right = mid - 1
      }
      return result;
   }

   const firstValIdx = findIdx(arr, val);
   const lastValIdx = findIdx(arr, val, false);
   if (firstValIdx === -1 || lastValIdx === -1) return -1
   return lastValIdx - firstValIdx + 1
}

console.log(sortedFrequency_logn([1, 1, 2, 2, 2, 2, 3], 2)) // 4
console.log(sortedFrequency_logn([1, 1, 2, 2, 2, 2, 3], 3)) // 1
console.log(sortedFrequency_logn([1, 1, 2, 2, 2, 2, 3], 1)) // 2
console.log(sortedFrequency_logn([1, 1, 2, 2, 2, 2, 3], 4)) // -1