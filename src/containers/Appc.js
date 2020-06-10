import React, { Component } from 'react';
import styles from  './App.module.css';
// import styled from 'styled-components';
// import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

// import Radium from 'radium';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
// 	font: inherit;
// 	border: 1px solid red;
// 	padding: 8px;
//   cursor: pointer;
//   color: white;
//   &:hover {
//         background-color:  ${props => props.alt ? 'salmon' : 'yellowgreen'} ;
//         color: black;
//   }
// `;
class Appc extends Component {
  constructor(props) { 
    super(props);
    console.log('[Appc.js] constructor');
  }
  state = {
    persons: [
      {id:'p1', name: 'Max', age: 28 },
      {id:'p2', name: 'Manu', age: 29 },
      {id:'p3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) { 
    console.log('[Appc.js] getDerivedStateFromProps', props);
    return state;
  }
  // componentWillMount() { 
  //   console.log('[Appc.js] will mount');
  // }
  // componentDidMount() { 
  //   console.log('[Appc.js] did mount');
  // }
  nameChangedHandler = (event, id) => {

    //find the index by id from persons state, then check if id is there. return the id to variable
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //not good to change immutable state
    // const person = this.state.persons[personIndex];
    
    //===================================================================
    // alternative 1 modern style
    const person = {...this.state.persons[personIndex]}
    //===================================================================
    //===================================================================
    // alternative 2 old style
    // const person = Object.assign({}, this.state.persons[personIndex]);
    //===================================================================

    //get value typed and assign into a new person object
    person.name = event.target.value;
    //take all, spread into new array
    const persons = [...this.state.persons]; //copy of old array
    //point the index that equals personIndex then replace with new object
    persons[personIndex] = person; //updated a new element
    //set new person state with new object
    this.setState({
      persons:persons
    });
	};
  
  deletPersonHandler = (index) => { 
    // const persons = this.state.persons.slice();
    //es6 spead operator
    const persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({persons:persons})
  }
  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  // 	this.setState({
  //     persons: [
  //       { name: newName, age: 1 },
  //       { name: 'Manu', age: 2 },
  //       { name: 'Stephanie', age: 3 }
  //     ]
  //   });
  // };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };
  render() {
    console.log('[Appc.js] render');
		// const style = {
		// 	backgroundColor: 'green',
		// 	font: "inherit",
		// 	border: "1px solid red",
		// 	padding: "8px",
    //   cursor: "pointer",
    //   color: 'white',
    //   ':hover': {
    //     backgroundColor: 'yellowgreen',
    //     color: 'black'
    //   }
    // }
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletPersonHandler}
            changed={this.nameChangedHandler}
          />
    }
    return (
      <div className={styles.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Appc;
