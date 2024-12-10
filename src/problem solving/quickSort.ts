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
): T[] {
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
  return arr;
}

console.log(pivot([4, 2, 1, 5, 8, 6, 7, 3]));
