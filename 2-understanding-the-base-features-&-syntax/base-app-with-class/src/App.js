import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Gustavo', age: '26'},
      {name: 'Manuel', age: '29'}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) =>{
    // console.log('Was Clicked!')
    //DON'T DO THIS this.state.persons[0].name = 'Gustavo Antonio'
    this.setState({
      persons: [
        {name: newName, age: '26'},
        {name: 'Manuel', age: '29'}
      ]
    })
  }

  nameChangeHandler = event =>{
    this.setState({
      persons: [
        {name: 'Gustavo', age: '26'},
        {name: event.target.value, age: '29'}
      ]
    })
  }

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className= "App">
        <h1>This is a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Gustavo!!')}>Switch Name</button>
        <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}/>
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        change={this.nameChangeHandler}
        click={this.switchNameHandler.bind(this, 'Gustavo!')}
        changed={this.nameChangeHandler}> My Hobbies: Racing</Person>
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
