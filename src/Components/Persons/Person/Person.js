import React, {Component } from 'react';
import styles from './Person.module.css';
import Aux from "../../../HOC/auxilary";
// import Radium from 'radium';
// import styled from 'styled-components';
// const StyledDiv = styled.div`
//                     width: 300px;
//                     margin: 16px auto;
//                     border: 1px solid #eee;
//                     box-shadow: 0 2px 3px #ccc;
//                     padding: 16px;
//                     text-align: center;
//                     @media (min-width: 200px){
//                         width: '100px'
//                     } 
//                 `;

class Person extends Component {
    style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    // constructor(props) {
    //     super(props);
    // }
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p key="p1" onClick={this.props.click} >I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="p2">{this.props.children}</p>
                <input key="p3" onChange={this.props.changed} value={this.props.name} type="text" />
            </Aux>
        );
    }
}  
    
export default Person;