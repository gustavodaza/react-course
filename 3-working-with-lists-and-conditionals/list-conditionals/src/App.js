import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Gustavo', age: '26' },
      { id: '2', name: 'Manuel', age: '29' }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex  , 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person
                    key={person.id}
                    name={person.name}
                    age= {person.age}
                    click={() => this.deletePersonHandler(index)}
                    changed={(event) => this.nameChangeHandler(event, person.id)}/>
        })}
        </div>
      )
    }

    return (
      <div className= "App">
        <h1>This is a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      // <div className="App">
      //   <h1>This is a React App</h1>
      //   <p>This is really working</p>
      // </div>
      // React.createElement('div', { className: 'App' }, React.createElement('h1', null, "Does this work now?")) This is how React creates a jsx tag, this code is equivalent to the one above
    );
  }
}

export default App;
