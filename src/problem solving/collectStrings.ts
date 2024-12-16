/**
 * Write a function called collectStrings
 * which accepts an object and returns an array
 * of all the values in the object that have a typeof string
 */
function collectStrings(obj: Object): string[] {
  const result: string[] = [];

  function collectStringHelper(obj: Object) {
    for (const key in obj) {
      if (typeof obj[key] === 'string') result.push(obj[key]);
      else if (typeof obj[key] === 'object' && !Array.isArray(obj[key]))
        collectStringHelper(obj[key]);
    }
  }

  collectStringHelper(obj);
  return result;
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
            nestedArr: [1, 2, 3, 4, 5],
          },
        },
      },
    },
  },
  outerString: 'john',
  outerArr: ['string', 'string2'],
};

console.log(collectStrings(obj));
