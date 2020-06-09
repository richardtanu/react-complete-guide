import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appc from './containers/Appc';
// import Apph from './Apph';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Appc />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
