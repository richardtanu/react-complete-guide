import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';
// import Radium from 'radium';
// import classes from '*.module.css';
const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
	font: inherit;
	border: 1px solid red;
	padding: 8px;
  cursor: pointer;
  color: white;
  &:hover {
        background-color:  ${props => props.alt ? 'salmon' : 'yellowgreen'} ;
        color: black;
  }
`;
class Appc extends Component {
  state = {
    persons: [
      {id:'p1', name: 'Max', age: 28 },
      {id:'p2', name: 'Manu', age: 29 },
      {id:'p3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
  };

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
		const style = {
			backgroundColor: 'green',
			font: "inherit",
			border: "1px solid red",
			padding: "8px",
      cursor: "pointer",
      color: 'white',
      ':hover': {
        backgroundColor: 'yellowgreen',
        color: 'black'
      }
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => { 
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletPersonHandler(index)}
              change={(event) => this.nameChangedHandler(event, person.id)}
              key={index}
            />
          })}
            {/* <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
                // change={this.nameChangedHandler}
            // click={this.switchNameHandler.bind(this, "CHRISTIN")}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              // click={this.switchNameHandler.bind(this, 'Christin Wijaya')}
              change={this.nameChangedHandler}
            >
              My Hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
                age={this.state.persons[2].age}
                // change={this.nameChangedHandler}
            /> */}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      // style.border = "1px solid green";
      
    }
    let cssClass = [];
    if ( this.state.persons.length <= 2 ) { 
      cssClass.push('red');
    }
    if (this.state.persons.length <= 1) { 
      cssClass.push('bold');
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={cssClass.join(' ')}>This is really working!</p>
        {/* <button> */}
        <StyledButton
          // style={style}
          alt={this.state.showPersons}
          onClick={this.togglePersonHandler}>
          Show Name
        </StyledButton>
        {/* </button> */}
        {/* inefficient way */}
				{/* <button
					style={style}
					onClick={() => this.switchNameHandler('Christin inefficient')}
				>
					Switch Name
				</button> */}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Appc;
