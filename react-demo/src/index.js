import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/common/reset.css';
import './static/css/common/common.css';
import {createStore} from "redux"
import { Provider } from 'react-redux'
import reducer from  './reducer'
import App from './App';

let store = createStore(reducer)

ReactDOM.render(
<Provider store={store}>    
  <App />
</Provider>  
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
