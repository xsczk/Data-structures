/**
 * Write a recursive function called nestedEvenSum.
 * Return the sum of all even numbers in an object
 * which may contain nested objects.
 */
function nestedEvenSum(obj: Object): number {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) sum += obj[key];
    else if (typeof obj[key] === 'object' && !Array.isArray(obj[key]))
      sum += nestedEvenSum(obj[key]);
  }
  return sum;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: [2],
      alsoNotANumber: 'yup',
    },
  },
};

console.log(nestedEvenSum(obj1)); // 2 + 2 + 2

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj2));
