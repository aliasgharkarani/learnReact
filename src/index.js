import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Input from './Todo-App/Inputs'
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './Reducers/rootReducer'

const store=createStore(rootReducer);

ReactDOM.render(<Provider store={store}><Input /></Provider>, document.getElementById('root'));
registerServiceWorker();
