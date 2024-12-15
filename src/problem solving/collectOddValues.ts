function collectOddValues(arr: number[]): number[] {
  let result: number[] = [];

  function collectOddHelper(arr: number[]): void {
    const len = arr.length;
    if (!len) return;
    if (arr[0] % 2 !== 0) result.push(arr[0]);
    collectOddHelper(arr.slice(1));
  }

  collectOddHelper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 4, 5, 6, 7, 3, 13, 17]));
