/**
 * Write a function minCoinChange that takes two arguments:
 * an array of coin denominations (coins)
 * and a target amount number (amount).
 * The provided array of coins is sorted in ascending order,
 * starting from the smallest coin denomination to the largest.
 *
 * Your task is to return an array representing
 * the minimum number of coins needed to make the given amount.
 * The result should be an array of the actual coins used, not their count or sum.
 * To achieve this, you should start by considering the largest denominations first
 * and use them as much as possible before moving to smaller denominations.
 * As a consequence of this, the result array should be sorted in descending order,
 * starting from the largest coin denomination to the smallest.
 *
 * @example
 * minCoinChange([1, 2, 3, 4, 5], 11); // this should return: [5, 5, 1]
 * minCoinChange([5, 10, 15, 20, 25], 85); // this should return: [25, 25, 25, 10]
 * minCoinChange([1, 5, 6, 9], 11); // this should return: [9, 1, 1]
 *
 * @param coins denominations list (sorted in ascending order)
 * @param amount an amount that needed to make from the given denominations `coins`
 * @return an array of the minimum actual coin used, sorted in descending order
 */

// Using greedy algorithm
function minCoinChange(coins: number[], amount: number) {
   const result: number[] = []
   /**
    * Start from the largest coin
    */
   for (let i = coins.length - 1; i >= 0; i--) {
      while (coins[i] <= amount) {
         result.push(coins[i]);
         amount -= coins[i];
      }
      if (amount === 0) break
   }
   /**
    * If we could not make up the amount exactly, return empty array
    */
   if (amount > 0) return []
   return result;
}

minCoinChange([1, 2, 3, 4, 5], 11); // this should return: [5, 5, 1]
minCoinChange([5, 10, 15, 20, 25], 85); // this should return: [25, 25, 25, 10]
minCoinChange([1, 5, 6, 9], 11); // this should return: [9, 1, 1]