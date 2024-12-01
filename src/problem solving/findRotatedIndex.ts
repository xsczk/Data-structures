/**
 * Divide and Conquer - findRotatedIndex
 * Write a function called findRotatedIndex
 * which accepts a rotated array of sorted numbers and an integer.
 * The function should return the index of the integer in the array.
 * If the value is not found, return -1.
 *
 * Constraints:
 *
 * Time Complexity - O(log n)
 *
 * Space Complexity - O(1)
 * @param arr input array
 * @param val input val
 * @return the index of `val` in input `arr`
 */

function findRotatedIndex(arr: number[], val: number) {
   let left = 0,
       right = arr.length - 1;
   while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (arr[mid] === val) return mid;
      if (arr[mid] >= arr[left]) {
         if (arr[left] <= val && val < arr[mid]) right = mid - 1;
         else left = mid + 1;
      } else {
         if (arr[mid] < val && val <= arr[right]) left = mid + 1;
         else right = mid - 1;
      }
   }
   return -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
