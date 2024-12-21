/**
 * Write a function called stringifyNumbers
 * which takes in an object and finds all the values
 * which are numbers and converts them to strings.
 * Recursion would be a great way to solve this!
 *
 * The exercise intends for you to create a new object
 * with the numbers converted to strings, and not modify the original.
 * Keep the original object unchanged.
 */
function stringifyNumber(obj: Object): Object {
  const copiedObj = {}
  for (const key in obj) {
    if (typeof obj[key] === 'number')
      copiedObj[key] = String(obj[key]);
    else if (typeof obj[key] === 'object' && !Array.isArray(obj[key]))
      copiedObj[key] = stringifyNumber(obj[key]);
    else copiedObj[key] = obj[key];
  }
  return copiedObj;
}

let obj = {
  num: 1,
  test: [2, 66],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    },
    array: ['john', 'doe'],
    num: 345,
    obj: {
      numAgain: 123,
      boolean: false,
      nestObj: {
        ahhNumAgain: 456,
        bool: true,
      }
    }
  }
}


console.log(stringifyNumber(obj))

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/