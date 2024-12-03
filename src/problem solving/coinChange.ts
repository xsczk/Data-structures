/**
 * Dynamic Programming - Coin Change
 * Write a function called coinChange
 * which accepts two parameters: an array of denominations and a value.
 * The function should return the number of ways you can obtain the value
 * from the given collection of denominations.
 * You can think of this as figuring out the number of ways
 * to make change for a given value from a supply of coins.
 *
 * @return number of ways to make `value` from the given collection
 * of `denominations`
 *
 * @example
 * const denominations = [1, 5, 10, 25]
 *
 * coinChange(denominations, 1) // 1
 * coinChange(denominations, 2) // 1
 * coinChange(denominations, 5) // 2
 * coinChange(denominations, 10) // 4
 * coinChange(denominations, 25) // 13
 * coinChange(denominations, 45) // 39
 * coinChange(denominations, 100) // 242
 * coinChange(denominations, 145) // 622
 * coinChange(denominations, 1451) // 425663
 * coinChange(denominations, 14511) // 409222339
 *
 * @tutorial using dynamic programing to solve this problem - memoization
 */

function coinChange(denominations: number[], value: number): number {
   // Initialize a DP array with size value + 1.
   // dp[i] will store the number of ways to make the value i.
   const dp: number[] = new Array(value + 1).fill(0);

   // There is exactly 1 way to make the value 0, which is using no coins.
   dp[0] = 1;

   // Loop through each denomination
   for (let coin of denominations) {
      // For each denomination, update the dp table from `coin` to `value`
      /**
       * Counting the number of ways to make `value` from `coin`
       * (Ex: number of ways to make 10 from 7 is the number of ways to make 10
       * from the other coins without 7 Plus
       * the number of ways to make 3 (10-7) - because we can add 7 then after
       * to make 10)
       */
      for (let i = coin; i <= value; i++) {
         dp[i] += dp[i - coin];
      }
   }

   // The result will be the number of ways to make the given value
   return dp[value];
}

const denominations = [1, 5, 10, 25]

console.log(coinChange(denominations, 1)) // 1
console.log(coinChange(denominations, 2)) // 1
console.log(coinChange(denominations, 5)) // 2
console.log(coinChange(denominations, 10)) // 4
console.log(coinChange(denominations, 25)) // 13
console.log(coinChange(denominations, 45)) // 39
console.log(coinChange(denominations, 100)) // 242
console.log(coinChange(denominations, 145)) // 622
console.log(coinChange(denominations, 1451)) // 425663
console.log(coinChange(denominations, 14511)) // 409222339