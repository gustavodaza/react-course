import React from 'react';
import './UserOutput.css';

const useroutput = (props) =>{
return (
  <div className="username">
    <p>My username is: {props.username}</p>
    <p onClick={props.change}>This is a paragrapgh</p>
  </div>
)
}

export default useroutput
