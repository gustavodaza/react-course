import React from 'react';

const validation = (props) => {

  let response = props.length < 5 ? <p>Text too short</p> : <p>Text long enough</p>

  return (
    <div>
      {response}
    </div>
  )
}

export default validation
