function fib(n: number, memo: Map<number, number>): number {
  if (memo.get(n) !== undefined) return memo.get(n);
  if (n <= 2) return 1;
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo.set(n, res);
  return res;
}

console.log(fib(6, new Map([])));
