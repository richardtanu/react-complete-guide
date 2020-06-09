import React from 'react';
import styles from './Cockpit.module.css'
const cockpit = (props) => {
    let cssClass = [];
    let btnClass = '';
    btnClass = styles.Red;
    if (props.showPersons) { 
        btnClass = styles.Red;
    }
    if ( props.persons.length <= 2 ) { 
      cssClass.push(styles.red);
    }
    if (props.persons.length <= 1) { 
      cssClass.push(styles.bold);
    }
    return (
        <div className={styles.Cockpit}>
        <h1>Hi, I'm a React App</h1>
        <p className={cssClass.join(' ')}>This is really working!</p>
        <button className={btnClass}
        //   alt={props.showPersons}
          onClick={props.clicked}>
                Show Name
        </button>
        </div>
    );
};

export default cockpit;