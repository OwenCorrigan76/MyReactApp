import React from 'react'

const TestApp = () => {
  const names = ['John', 'Paul', 'George', 'Ringo'];
  const name = "Owen"
  const loggedIn = false;

  return (
  <>
    <div className='text-5xl'>App</div>
    <p style={ {color:"red", fontSize:30}}> Hello {name}</p>
    <ul>
      {names.map((name, index) => (
          <li key={index}>{name}</li>
      )) }
    </ul>
    {loggedIn ?<p>Hello Mofo</p> : <p>Hello mefo</p>}
</>
  );
};

export default TestApp