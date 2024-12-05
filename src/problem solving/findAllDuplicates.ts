/**
 * Frequency Counter - findAllDuplicates
 * Given an array of positive integers, some elements appear twice
 * and others appear once. Find all the elements that appear twice in this array.
 * Note that you can return the elements in any order.
 *
 * @example
 * findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
 * findAllDuplicates([4, 3, 2, 1, 0]) // []
 * findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
 *
 * @param arr input array
 * @return sub array contains duplicates element from input `arr`
 */

function findAllDuplicates(arr: number[]) {
   const lookup: { [key: number]: number } = {};
   const result: Set<number> = new Set();
   for (const num of arr) {
      lookup[num] = (lookup[num] || 0) + 1
      if (lookup[num] > 1) result.add(num);
   }
   return Array.from(result);
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1, 3, 3, 3, 2])) // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])) // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])) // array with 3, 2, and 1