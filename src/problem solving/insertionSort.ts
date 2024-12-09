/**
 * Implement insertionSort. Given an array, both algorithms
 * will sort the values in the array. The functions take 2 parameters:
 * an array and an optional comparator function.
 * The comparator function is a callback that will take two values
 * from the array to be compared. The function returns a negative value
 * if the first value is less than the second,
 * a positive value if the first value is greater than the second,
 * and 0 if both values are equal. The default comparator you provide
 * should assume that the two parameters are numbers and that
 * we are sorting the values from smallest to largest.
 *
 * Here's some guidance for how insertion sort should work:
 *
 * 1. Start by picking the second element in the array
 * (we will assume the first element is the start of the "sorted" portion)
 *
 * 2. Now compare the second element with the one before it
 * and swap if necessary.
 *
 * 3. Continue to the next element and if it is in the incorrect order,
 * iterate through the sorted portion to place the element in the correct place.
 *
 * 4. Repeat until the array is sorted.Implement insertion sort.
 * Your function should accept an array and return an array of sorted values.
 */

function insertionSort<T>(arr: T[], comparator?: (a: T, b: T) => number): T[] {
   if (typeof comparator !== 'function') {
      comparator = (a: any, b: any): number => {
         if (typeof a === 'number' && typeof b === 'number') {
            return a - b;
         }
         throw new Error('Default comparator can only be used for numbers.');
      };
   }
   const len = arr.length;
   for (let i = 1; i < len; i++) {
      const currVal = arr[i];
      for (let j = i - 1; j >= 0; j--) {
         if (comparator(arr[j], currVal) > 0) {
            arr[j + 1] = arr[j];
            if (j === 0) arr[0] = currVal;
         } else {
            arr[j + 1] = currVal;
            break;
         }
      }
   }
   return arr;
}

const moarKittyData = [
   {
      name: 'LilBub',
      age: 7,
   },
   {
      name: 'Garfield',
      age: 40,
   },
   {
      name: 'Heathcliff',
      age: 45,
   },
   {
      name: 'Blue',
      age: 1,
   },
   {
      name: 'Grumpy',
      age: 6,
   },
];
console.log(insertionSort(moarKittyData, (a, b) => a.age - b.age));

console.log(
    insertionSort([
       4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
       4342, 32,
    ]),
);

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
   if (a < b) {
      return -1;
   } else if (a > b) {
      return 1;
   }
   return 0;
}

console.log(insertionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]