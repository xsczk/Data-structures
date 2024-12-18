/**
 * Write a recursive function called flatten
 * which accepts an array of arrays
 * and returns a new array with all values flattened.
 */
function flatten(arr: any[]): any[] {
   /** Using helper function */
   const result: any[] = [];

   function helper(arr: any[]) {
      for (const el of arr) {
         if (Array.isArray(el)) helper(el)
         else result.push(el);
      }
   }

   helper(arr)
   return result;
}

function flatten2(arr: any[]): any[] {
   const result: any[] = [];

   function helper(arr: any[]) {
      if (!arr.length) return
      if (Array.isArray(arr[0])) helper(arr[0])
      else result.push(arr[0]);
      helper(arr.slice(1))
   }

   helper(arr)

   return result
}

console.log(flatten2([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten2([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten2([[1], [2], [3]])) // [1,2,3]
console.log(flatten2([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]