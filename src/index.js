import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Input from './Todo-App/Inputs'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Input />, document.getElementById('root'));
registerServiceWorker();
