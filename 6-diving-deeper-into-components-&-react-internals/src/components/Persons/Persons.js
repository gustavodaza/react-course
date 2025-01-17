import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props)
  // }

  // componentWillUpdate(){

  // }

  componentWillUnmount (){
    console.log('[Persons.js] componentWillUnmount')
  }

  // A pure component is a normal component that implements shouldComponentUpdate to check if props or state changed automatically
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js shouldComponentUpdate')
  //   if (
  //       nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked
  //     ) {
  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js getSnapshotBeforeUpdate')
    return { message: 'Snapshot! '};
  }

  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log('[Persons.js componentDidUpdate')
    console.log(Snapshot)
  }

  render (){
    console.log('[Persons.js] rendering...')
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age= {person.age}
          clicked={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
        />
      )
    });
  }
};

export default Persons
