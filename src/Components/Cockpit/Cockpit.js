import React, { useEffect, useRef } from 'react';
import styles from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';
const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  
    useEffect(() => { 
      console.log('[Cockpit.js] useEffect');
      //const timer = put setTimeout here
      // setTimeout(() => {
      //   alert('Save change successfully to cloud server');
      // }, 1000);
      toggleButtonRef.current.click();
      return () => { 
        // clearTimeout(timer);
        console.log('[Cockpit.js] clean up work');
      }
    },[]);
    useEffect(() => { 
      console.log('[Cockpit.js] 2nd useEffect');
      return () => { 
        console.log('[Cockpit.js] 2nd clean up work');
      }
    });
    let cssClass = [];
    let btnClass = '';
    btnClass = styles.Red;
    if (props.showPersons) { 
        btnClass = styles.Red;
    }
    if ( props.personLength <= 2 ) { 
      cssClass.push(styles.red);
    }
    if (props.personLength <= 1) { 
      cssClass.push(styles.bold);
    }
    return (
      <div className={styles.Cockpit}>
        <h1>{props.title}</h1>
        <p className={cssClass.join(' ')}>This is really working!</p>
        <button
          ref={toggleButtonRef}
          className={btnClass}
        //   alt={props.showPersons}
          onClick={props.clicked}>
          Show Name
        </button>
        <AuthContext.Consumer>
          {
            (context) => <button onClick={context.login}>Log In</button>
          }
        </AuthContext.Consumer>
      </div>
    );
};

export default React.memo(Cockpit);