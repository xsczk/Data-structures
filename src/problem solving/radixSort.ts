/**
 * Implement a function called getDigit
 * which accepts a positive integer and a position,
 * and returns the digit in that number at the given position.
 * The position reads from right to left,
 * so the 0th position corresponds to the rightmost digit.
 * @example
 * getDigit(12345, 0); // 5
 * getDigit(12345, 1); // 4
 * getDigit(12345, 2); // 3
 * getDigit(12345, 3); // 2
 * getDigit(12345, 4); // 1
 * getDigit(12345, 5); // 0
 *
 * getDigit(8987, 0); // 7
 * getDigit(8987, 1); // 8
 * getDigit(8987, 2); // 9
 * getDigit(8987, 3); // 8
 * getDigit(8987, 4); // 0
 */
function getDigit(num: number, i: number): number {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

/**
 * Implement a function called digitCount
 * which accepts a positive integer
 * and returns the number of digits that the integer has.
 * @example
 * digitCount(1); // 1
 * digitCount(9); // 1
 * digitCount(25); // 2
 * digitCount(314); // 3
 * digitCount(1234); // 4
 * digitCount(77777); // 5
 */
function digitCount(num: number) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

/**
 * Implement a function called mostDigits
 * which accepts an array of integers
 * and returns a count of the number of digits
 * for the number in the array with the most digits.
 * @example
 * mostDigits([1, 9, 10, 100, 99]); // 3
 * mostDigits([100, 1010, 1, 500]); // 4
 * mostDigits([0, 100000, 400, 12, 8]); // 6
 * mostDigits([]); // 0
 */
function mostDigits(arr: number[]): number {
  let maxDigits = 0;
  for (const num of arr) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

function radixSort(arr: number[]) {
  const maxDigits = mostDigits(arr);
  for (let i = 0; i < maxDigits; i++) {
    /**
     * Create an array dp of 10 empty arrays to hold numbers
     * by their digit value (0-9)
     */
    const dp: number[][] = Array.from({ length: 10 }, (): number[] => []);
    for (let j = 0; j < arr.length; j++) {
      const elDigit = getDigit(arr[j], i);
      dp[elDigit].push(arr[j]);
    }
    arr = [].concat(...dp);
  }
  return arr;
}

radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]);
