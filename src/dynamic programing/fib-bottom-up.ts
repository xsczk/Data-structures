function fib(n: number) {
  if (n <= 2) return 1;
  const fibArr = [undefined, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr[n];
}

console.log(fib(10000));
