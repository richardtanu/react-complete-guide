import React from 'react';
import styles from './Person.module.css';
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

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    console.log('[Person.js] rendering...');
    return (
        // <StyledDiv>
        <div className={styles.Person}>
            <p onClick={props.click} >I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} type="text" />
        </div>
        // </StyledDiv>
    );
}  
    
export default person;