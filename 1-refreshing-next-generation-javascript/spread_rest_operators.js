// Spread Used to split up array elements OR objects properties

const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];
console.log(newArray)

const oldObject = {
  name: 'Gustavo'
}
const newObject = {
  ...oldObject,
  age: 25 }
console.log(newObject)

// Rest Used to merge a list of function arguments into an array

// function sortArgs(...args){
//   return args.sort()
// }

const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3))

