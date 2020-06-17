import React, {Component , Fragment} from 'react';
import styles from './Person.module.css';
import auxilary from "../../../HOC/auxilary";
import withCalass from '../../../HOC/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
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
    constructor(props) { 
        super(props);
        // any reference object
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;
    componentDidMount() { 
        //functional style
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render() {
        console.log('[Person.js] rendering...');
        return (
            <auxilary>
                
                {
                    this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
                }
                
                {/* {this.props.isAuth ? } */}
                {/* <div className = { styles.Person } > */}
                {/* <React.Fragment> */}
                <p key="p1" onClick={this.props.click} >I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="p2">{this.props.children}</p>
                <input
                    key="p3"
                    // this is ok
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name}
                    type="text"
                />
                {/* </React.Fragment> */}
                {/* </div > */}
            </auxilary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default withCalass(Person, styles.Person);