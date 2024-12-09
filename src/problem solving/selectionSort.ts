/**
 * Selection Sort
 *
 * Here's some guidance for how selection sort should work:
 *
 * 1. Assign the first element to be the smallest value
 * (this is called the minimum). It does not matter right now
 * if this actually the smallest value in the array.
 *
 * 2. Compare this item to the next item in the array
 * until you find a smaller number.
 *
 * 3. If a smaller number is found, designate that smaller number
 * to be the new "minimum" and continue until the end of the array.
 *
 * 4. If the "minimum" is not the value (index) you initially began with,
 * swap the two values. You will now see that
 * the beginning of the array is in the correct order
 * (similar to how after the first iteration of bubble sort,
 * we know the rightmost element is in its correct place).
 *
 * 5. Repeat this with the next element until the array is sorted.
 */

function selectionSort<T>(arr: T[], comparator?: (a: T, b: T) => number): T[] {
  if (typeof comparator !== 'function') {
    comparator = (a: any, b: any): number => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
      }
      throw new Error('Default comparator can only be used for numbers.');
    };
  }
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (comparator(arr[minIdx], arr[j]) > 0) minIdx = j;
    }
    if (minIdx !== i) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
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

console.log(selectionSort(moarKittyData, (a, b) => a.age - b.age));
