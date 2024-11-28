function fib(
  n: number,
  memo = new Map([
    [1, 1],
    [2, 1],
  ]),
): number {
  if (memo.get(n) !== undefined) return memo.get(n);
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo.set(n, res);
  return res;
}

console.log(fib(8));

// 1,1,2,3,5,8,13,21