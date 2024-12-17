/**
 * Write a function called findLongestSubstring,
 * which accepts a string and returns the length of the longest substring
 * with all distinct characters.
 *
 * @example
 * findLongestSubstring('') // 0
 * findLongestSubstring('rithmschool') // 7
 * findLongestSubstring('thisisawesome') // 6
 * findLongestSubstring('thecatinthehat') // 7
 * findLongestSubstring('bbbbbb') // 1
 * findLongestSubstring('longestsubstring') // 8
 * findLongestSubstring('thisishowwedoit') // 6
 */
function findLongestSubstring(str: string): number {
   if (!str.length) return 0;
   let longest = 1;
   let start = 0;
   let end = 1;
   let lookup = new Map<string, number>([[str[start], start]]);
   while (end < str.length && start < str.length) {
      if (!lookup.has(str[end])) {
         lookup.set(str[end], end);
         if (end === str.length - 1) longest = Math.max(longest, end - start + 1);
         end++
      } else {
         longest = Math.max(longest, end - start)
         start = lookup.get(str[end]) + 1;
         lookup.clear()
         lookup.set(str[start], start);
         end = start + 1
      }
   }
   return longest;
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
