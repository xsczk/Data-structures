/**
 * This function contains nearly all of the logic
 * you'll need in order to implement Quick Sort in the next exercise.
 *
 * The pivot function is responsible for taking an array,
 * setting the pivot value, and mutating the array so that
 * all values less than the pivot wind up to the left of it,
 * and all values greater than the pivot wind up to the right of it.
 * It's also helpful if this helper returns the index of
 * where the pivot value winds up.
 * @example
 * // if we decide the pivot will always be the first element in the array,
 * // it should behave in the following way:
 * var arr = [4, 2, 5, 3, 6];
 * pivot(arr); // 2
 * arr; // [3, 2, 4, 5, 6];
 */
function pivot<T>(
    arr: T[],
    comparator?: (a: T, b: T) => number,
    start = 0,
    end = arr.length - 1,
): number {
   if (typeof comparator !== 'function')
      comparator = (a: any, b: any): number => {
         if (typeof a === 'number' && typeof b === 'number') return a - b;
         throw new Error('Default comparator can only be used for numbers.');
      };

   function swap(arr: T[], i: number, j: number) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
   }

   let pivot = arr[start];
   let swapIdx = start;
   for (let i = start + 1; i <= end; i++) {
      if (comparator(arr[i], pivot) < 0) {
         /** Increase swap index if that element is smaller than pivot value
          * so that we know exactly the final index pivot value need to be at */
         swapIdx++;
         swap(arr, swapIdx, i);
      }
   }
   swap(arr, start, swapIdx);
   return swapIdx;
}

/**
 * The algorithm of quick sort is as follows:
 *
 * 1. Pick an element in the array and designate it as the "pivot".
 * While there are quite a few options for choosing the pivot.
 * We'll make things simple to start, and will choose the pivot
 * as the first element. This is not an ideal choice,
 * but it makes the algorithm easier to understand for now.
 *
 * 2. Next, compare every other element in the array to the pivot.
 * If it's less than the pivot value, move it to the left of the pivot.
 * If it's greater, move it to the right.
 *
 * 3. Once you have finished comparing, the pivot will be in the right place.
 *
 * 4. Next, recursively call quicksort again
 * with the left and right halves from the pivot until the array is sorted.
 */

function quickSort<T>(
    arr: T[],
    comparator?: (a: T, b: T) => number,
    start = 0,
    end = arr.length - 1,
): T[] {
   if (start + 1 <= end) {
      const pivotIndex = pivot(arr, comparator, start, end);
      quickSort(arr, comparator, start, pivotIndex);
      quickSort(arr, comparator, pivotIndex + 1, end);
   }
   return arr;
}

console.log(quickSort([
   4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
   4342, 32
]));
// 2,1,3,4,5,8,6,7
// 1,2,3,4,5,8,6,7
// 1,2,3,4,5,8,6,7
// 1,2,3,4,5,6,7,8

// console.log(quickSort([3, 2, 1, 4, 5, 8, 6, 7], undefined, 3, 7));
