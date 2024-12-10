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

const arr3 = [-2, -1, 0, 4, 5, 6];
const arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

console.log(merge(arr3, arr4));

const arr5 = [3, 4, 5];
const arr6 = [1, 2];

console.log(merge(arr5, arr6));

const names = ["Bob", "Ethel", "Christine"]
const otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]

function stringLengthComparator(str1: string, str2: string) {
   return str1.length - str2.length;
}

console.log(merge(names, otherNames, stringLengthComparator)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]
