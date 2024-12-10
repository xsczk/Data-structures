/**
 * Given two sorted arrays, write a function called merge
 * which accepts two SORTED arrays and returns a new array
 * with both of the values from each array sorted.
 *
 * This function should run in O(n + m) time and O(n + m) space
 * and should not modify the parameters passed to it.
 *
 * As before, the function should default to sorting numbers
 * in ascending order. If you pass in a comparator function
 * as a third argument, this comparator is what will be used.
 * (Note that the input arrays will always be sorted according to the comparator!)
 *
 * Approach: Using two pointers
 */

function merge<T>(
    arr1: T[],
    arr2: T[],
    comparator?: (a: T, b: T) => number,
): T[] {
   if (typeof comparator !== 'function') {
      comparator = (a: any, b: any): number => {
         if (typeof a === 'number' && typeof b === 'number') {
            return a - b;
         }
         throw new Error('Default comparator can only be used for numbers.');
      };
   }
   let i = 0,
       j = 0;
   let result = [];
   while (i < arr1.length && j < arr2.length) {
      if (comparator(arr2[j], arr1[i]) >= 0) {
         result.push(arr1[i]);
         i++;
      } else {
         result.push(arr2[j]);
         j++;
      }
   }
   while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
   }
   while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
   }
   return result;
}

/**
 * Here's some guidance for how merge sort should work:
 *
 * 1. Break up the array into halves until
 * you can compare one value with another
 *
 * 2. Once you have smaller sorted arrays,
 * merge those arrays with other sorted pairs
 * until you are back at the full length of the array
 *
 * 3. Once the array has been merged back together,
 * return the merged (and sorted!) array
 */
function mergeSort<T>(arr: T[], comparator?: (a: T, b: T) => number): T[] {
   if (arr.length <= 1) return arr;
   let mid = Math.floor(arr.length / 2);
   const left = mergeSort(arr.slice(0, mid), comparator);
   const right = mergeSort(arr.slice(mid), comparator);
   return merge(left, right, comparator);
}

// const arr3 = [-2, -1, 0, 4, 5, 6];
// const arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
//
// console.log(merge(arr3, arr4));
//
// const arr5 = [3, 4, 5];
// const arr6 = [1, 2];
//
// console.log(merge(arr5, arr6));
//
// const names = ["Bob", "Ethel", "Christine"]
// const otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]
//
// function stringLengthComparator(str1: string, str2: string) {
//    return str1.length - str2.length;
// }
//
// console.log(merge(names, otherNames, stringLengthComparator)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]

console.log(mergeSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(mergeSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(mergeSort([1, 2, 3])); // [1, 2, 3]
console.log(mergeSort([]));

const nums = [
   4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
   4342, 32
];
console.log(mergeSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

const moarKittyData = [
   {
      name: "LilBub",
      age: 7
   }, {
      name: "Garfield",
      age: 40
   }, {
      name: "Heathcliff",
      age: 45
   }, {
      name: "Blue",
      age: 1
   }, {
      name: "Grumpy",
      age: 6
   }
];

function oldestToYoungest(a, b) {
   return b.age - a.age;
}

console.log(mergeSort<{
   name: string,
   age: number
}>(moarKittyData, oldestToYoungest)); // sorted by age in descending order