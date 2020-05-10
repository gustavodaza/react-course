// Normal Function(Old Way)

// function printMyName(name) {
//   console.log(name)
// }

// printMyName('Gustavo')

// Arrow Function(New Way)
// If only one argument no need of parenthesis
//If no arguments puts nothing between parenthesis ()

const printMyName = (name, lastname) => {
  console.log(name, lastname)
}

printMyName('Gustavo', 'Daza')

// const multiply = number => {
//   return number * 2
// }

// If the only purpose of the function is return something, the function can be writed like this:

const multiply = number => number * 2

console.log(multiply(4))
