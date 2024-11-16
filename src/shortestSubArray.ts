/**
 *
 * @param arr {number[]} input array
 * @return {number} length of the shortest sub array such that the remaining elements
 * in the array are non-decreasing
 * @desc find the length of the shortest sub-array such that the remaining elements
 * in the
 */

function findLengthOfShortestSubarray(arr: number[]): number {
  const length = arr.length;
  let left = arr.findIndex((el, idx) => el > arr[idx + 1]);
  if (left === -1) return 0;
  let right = length - 1;
  while (right > left && arr[right] >= arr[right - 1]) right--;
  let remove = Math.min(length - 1 - left, right);
  let i = 0,
    j = right;
  while (i <= left && j < length) {
    if (arr[i] <= arr[j]) {
      remove = Math.min(remove, j - i - 1);
      i++;
    } else j++;
  }
  return remove;
}

findLengthOfShortestSubarray([1, 3, 4, 10, 4, 2, 3, 5]);
