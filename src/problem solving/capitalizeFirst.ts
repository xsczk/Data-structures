/**
 * Write a recursive function called capitalizeFirst.
 * Given an array of strings, capitalize the first letter
 * of each string in the array.
 * @example
 * capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 */
function capitalizeFirst(strings: string[]): string[] {
  const result: string[] = [];
  if (strings.length === 0) return result;
  const capitalizedStr =
    strings[0].charAt(0).toUpperCase() + strings[0].slice(1);
  result.push(capitalizedStr);
  strings.shift();
  return result.concat(capitalizeFirst(strings));
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));
