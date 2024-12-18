/**
 * Write a recursive function called isPalindrome
 * which returns true if the string passed to it is a palindrome
 * (reads the same forward and backward). Otherwise, it returns false.
 */
function isPalindrome(str: string): boolean {
   function reverse(str: string): string {
      const len = str.length;
      if (!len) return str;
      return `${str[len - 1]}${reverse(str.slice(0, len - 1))}`
   }

   const reversedStr = reverse(str);
   return reversedStr === str
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false