/**
 * Given an array of integers and a number, write a function called maxSubarraySum,
 * which finds the maximum sum of a subarray with the length of the number passed to the function.
 *
 * Note that a subarray must consist of consecutive elements from the original array.
 * In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 *
 * @example
 * maxSubarraySum([100,200,300,400], 2) // 700
 * maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
 * maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
 * maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
 * maxSubarraySum([2,3], 3) // null
 *
 * @param arr input array
 * @param num length of the sub array that is the return value of the function
 * @return a sub array that consist of consecutive elements from the input `arr`
 * and it has `num` of length as well as maximum sum of each element
 */

function maxSubarraySum(arr: number[], num: number) {
  if (arr.length < num) return null;
  let tempResult = 0;
  let maxResult: number;
  for (let i = 0; i < num; i++) {
    tempResult += arr[i];
  }
  maxResult = tempResult;
  for (let j = num; j < arr.length; j++) {
    tempResult = tempResult - arr[j - num] + arr[j];
    if (tempResult > maxResult) {
      maxResult = tempResult;
    }
  }
  return maxResult;
}

console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
