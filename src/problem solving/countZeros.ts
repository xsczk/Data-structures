/**
 * Given an array of 1s and 0s which has all 1s first followed by all 0s,
 * write a function called countZeroes,
 * which returns the number of zeroes in the array.
 *
 * @example
 * countZeroes([1,1,1,1,0,0]) // 2
 * countZeroes([1,0,0,0,0]) // 4
 * countZeroes([0,0,0]) // 3
 * countZeroes([1,1,1,1]) // 0
 * Time Complexity - O(log n)
 *
 * @param arr input array
 * @return number of zeroes in the input `arr`
 */

// Using binary search approach
function countZeroes(arr: number[]): number {
  let left = 0,
    right = arr.length - 1;
  let firstZeroIndex: number | undefined = undefined;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === 1) {
      left = mid + 1;
    } else {
      firstZeroIndex = mid;
      right = mid - 1;
    }
  }
  if (firstZeroIndex === undefined) return 0;
  return arr.length - firstZeroIndex;
}

console.log(countZeroes([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]));
console.log(countZeroes([1, 1, 1, 0, 0, 0]));
console.log(countZeroes([0, 0, 0, 0]));
