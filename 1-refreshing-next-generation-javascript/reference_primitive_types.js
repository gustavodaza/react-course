const number = 1;
const num2 = number;

console.log(num2)

const person = {
  name: 'Gustavo'
};

// const secondPerson = person; This is not a new object this a reference to memory of the object person already created, thats why the console.log will show the new value

const secondPerson = {
  ...person // Here we are using the spread operator to copy the object and not the reference, thats why the console.log will show the value we copied
}

person.name = "Manuel"

console.log(secondPerson);
