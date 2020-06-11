import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => { 
      console.log('[Cockpit.js] useEffect');
      setTimeout(() => {
        alert('Save change successfully to cloud server');
      }, 100);
    },[]);

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
        <h1>{props.title}</h1>
        <p className={cssClass.join(' ')}>This is really working!</p>
        <button className={btnClass}
        //   alt={props.showPersons}
          onClick={props.clicked}>
                Show Name
        </button>
        </div>
    );
};

export default Cockpit;