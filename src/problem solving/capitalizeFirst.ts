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
  const lastIndex = strings.length - 1;
  const capitalizedStr =
    strings[lastIndex].charAt(0).toUpperCase() + strings[lastIndex].slice(1);
  result.push(capitalizedStr);
  strings.pop();
  return capitalizeFirst(strings).concat(result);
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));
