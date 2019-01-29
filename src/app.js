//everything is still in its own scope 
// import './utils.js'
import sub, {square,add} from './utils.js';
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'; //cross browser css compatible 
import './styles/styles.scss'


ReactDOM.render(<IndecisionApp options={['devils den','second district']}/>, document.getElementById('app'));
