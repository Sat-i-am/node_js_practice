const _ = require(`lodash`)

const arr = [1,[2,[3,[4,[5]]]]]   //this is a nested array

console.log(_.flattenDeep(arr)) //this method will flatten this nested array in a single array