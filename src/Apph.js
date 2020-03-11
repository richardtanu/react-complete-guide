import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
// import Radium, { StyleRoot } from 'radium';

const Apph = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Max', age: '25' },
      { name: 'Richard', age: '25' },
      { name: 'Tanugraha', age: '25' }
    ],
    otherState: "some value"
  });
  const switchNameHandler = () => { 
    setPersonState({
      persons: [
        { name: 'Satu', age: '1' },
        { name: 'Dua', age: '2' },
        { name: 'Tiga', age: '3' }
      ]
    });
  }
  return (
    // <StyleRoot>
      <div className='App'>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}>This is person's children.</Person>
      </div>
    // </StyleRoot>
  );
}

export default Apph;
