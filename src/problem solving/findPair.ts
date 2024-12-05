/**
 * Given an unsorted array and a number n,
 * find if there exists a pair of elements in the array whose difference is n.
 * This function should return true if the pair exists or false if it does not.
 *
 * @example
 * findPair([6,1,4,10,2,4], 2) // true
 * findPair([8,6,2,4,1,0,2,5,13],1) // true
 * findPair([4,-2,3,10],-6) // true
 * findPair([6,1,4,10,2,4], 22) // false
 * findPair([], 0) // false
 * findPair([5,5], 0) // true
 * findPair([-4,4], -8) // true
 * findPair([-4,4], 8) // true
 * findPair([1,3,4,6],-2) // true
 * findPair([0,1,3,4,6],-2) // true
 *
 * @param arr input array
 * @param n input number
 * @return whether if there exists a pair of elements in the `arr`
 * whose difference is `n`
 */

// First approach: using frequency counter
// Time complexity: O(n)
function findPairFrequencyCounter(arr: number[], n: number) {
   const map: Map<number, number> = new Map();
   for (const num of arr) {
      map.set(num, num - n);
   }
   for (const [key] of map) {
      const curr = map.get(key);
      if (map.has(curr)) return true
   }
   return false;
}

// Second approach: #sorting, #binary-search
// Time complexity: O(n*logn)
function findPairBinarySearch(arr: number[], n: number) {
   // Sorting the array
   const sortedArr = arr.sort((a, b) => a - b);

   // Using binary search

   function binarySearch(target: number) {
      let left = 0, right = sortedArr.length - 1;
      while (left <= right) {
         const mid = Math.floor((left + right) / 2);
         if (sortedArr[mid] === target) return true
         if (sortedArr[mid] < target) left = mid + 1
         else right = mid - 1
      }
      return false
   }

   for (const num of sortedArr) {
      if (binarySearch(num - n)) return true
   }

   return false
}

// Third approach: #sorting, #two-pointers
// Code goes here

console.log(findPairBinarySearch([6, 1, 4, 10, 2, 4], 2)) // true
console.log(findPairBinarySearch([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)) // true
console.log(findPairBinarySearch([4, -2, 3, 10], -6)) // true
console.log(findPairBinarySearch([6, 1, 4, 10, 2, 4], 22)) // false
console.log(findPairBinarySearch([], 0)) // false
console.log(findPairBinarySearch([5, 5], 0)) // true
console.log(findPairBinarySearch([-4, 4], -8)) // true
console.log(findPairBinarySearch([-4, 4], 8)) // true
console.log(findPairBinarySearch([1, 3, 4, 6], -2)) // true
console.log(findPairBinarySearch([0, 1, 3, 4, 6], -2)) // true
