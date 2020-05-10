// classes can have properties and methods


class Human {
  // ES6
  // constructor(){
  //   this.gender = 'male'
  // }
  // printGender(){
  //   console.log(this.gender)
  // }

  //ES7
  gender = 'male'
  printGender = () =>{
    console.log(this.gender)
  }
}


class Person extends Human {
  //ES6
  // constructor() {
  //   super();
  //   this.name = 'Gustavo'
    // this.gender = 'female' we can call gender property in Person class because we are extending Human class
  // }
  // printMyName(){
  //   console.log(this.name)
  // }

  //ES7
  name = 'Gustavo'

  printMyName = () =>{
    console.log(this.name)
  }
}

const person = new Person();
person.printMyName();
person.printGender();
// Usage

// const myPerson = new Person()
// myPerson.call()
// console.log(myPerson.name)

// Inheritance

// class Person extends Master
