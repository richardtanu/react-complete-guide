import React from 'react';
// import './Person.css';
// import Radium from 'radium';
import styled from 'styled-components';
const StyledDiv = styled.div`
                    width: 300px;
                    margin: 16px auto;
                    border: 1px solid #eee;
                    box-shadow: 0 2px 3px #ccc;
                    padding: 16px;
                    text-align: center;
                    @media (min-width: 200px){
                        width: '100px'
                    } 
                `;
const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <StyledDiv>
            <p onClick={props.click} >I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input onChange={props.change} value={props.name} type="text" />
        </StyledDiv>
    );
}  
    
export default person;