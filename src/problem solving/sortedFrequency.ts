/**
 * Divide and Conquer - sortedFrequency
 * Given a sorted array and a number,
 * write a function called sortedFrequency
 * that counts the occurrences of the number in the array
 *
 * sortedFrequency([1,1,2,2,2,2,3],2) // 4
 * sortedFrequency([1,1,2,2,2,2,3],3) // 1
 * sortedFrequency([1,1,2,2,2,2,3],1) // 2
 * sortedFrequency([1,1,2,2,2,2,3],4) // -1
 * Time Complexity - O(log n)
 */

/**
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

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)) // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)) // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)) // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)) // -1