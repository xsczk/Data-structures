/**
 * @description Only consider using bubbleSort if the input `arr` is nearly sorted.
 *
 * ATTEMPT THIS IS YOU ARE UP FOR IT!
 * Implement a function called bubbleSort.
 * Given an array, bubbleSort will sort the values in the array.
 * The function takes 2 parameters: an array and an optional comparator function.
 *
 * @example
 * function bubbleSort(arr, comparator) {
 *   if (typeof comparator !== 'function') {
 *     // provide a default
 *   }
 * }
 *
 * @param arr the input array that need to sorted based on any property.
 * @param comparedFunc The comparator function is a callback
 * that will take two values from the `arr` to be compared.
 * The function returns a negative value if the first value
 * is less than the second, a positive value if the first value
 * is greater than the second, and 0 if both values are equal.
 *
 * The default comparator you provide should assume that
 * the two parameters are numbers and that we are sorting
 * the values from smallest to largest.
 */

function bubbleSort<T>(arr: T[], comparedFunc?: (a: T, b: T) => number): T[] {
  if (typeof comparedFunc !== 'function') {
    comparedFunc = (a: any, b: any): number => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
      }
      throw new Error('Default comparator can only be used for numbers.');
    };
  }
  let len = arr.length;
  let swap = false;
  for (let i = 0; i < len; i++) {
    swap = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (comparedFunc(arr[j], arr[j + 1]) > 0) {
        /** Swap these elements if they are in wrong order */
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    /** If we end up nested for loop with no any swap logic happened
     * that means the array was sorted => break out the loop */
    if (!swap) break;
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

console.log(bubbleSort(moarKittyData, (a, b) => a.age - b.age));
