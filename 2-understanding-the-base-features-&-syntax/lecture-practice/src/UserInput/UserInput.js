import React from 'react';
import './UserInput.css';

const userinput = (props) => {
  const styles ={
    marginLeft: '20px',
    fontStyle: 'inherit',
    padding: '5px'
  }
  return (
    <input style={styles} type='text' onChange={props.changed} value={props.username}/>
  )
}

export default userinput
