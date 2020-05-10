import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState ({
      persons: [
        {name: 'Gustavo', age: '26'},
        {name: 'Manuel', age: '29'}
      ]
  });

  const [otherState, setOtherState] = useState('some other value')

  console.log(personsState, otherState)

  const switchNameHandler = () =>{
    setPersonsState({
      persons: [
        {name: 'Gustavo Antonio', age: '26'},
        {name: 'Manuel', age: '29'}
      ],
    });
  }

    return (
      <div className= "App">
        <h1>This is a React App</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}/>
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}>
          My Hobbies: Racing
        </Person>
      </div>
    );
  }

export default app;
