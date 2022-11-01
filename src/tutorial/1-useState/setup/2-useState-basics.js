import React, { useState } from 'react';

const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const handler = useState(1)[1];

  const [text, setText] = useState('hello');

  const handleClick = () => {
    if (text === 'hello') {
      setText('hola');
    } else {
      setText('hello');
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        greetings
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
