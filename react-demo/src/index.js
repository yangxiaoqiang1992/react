import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/common/reset.css';
import './static/css/common/common.css';
import 'antd/dist/antd.css'
import {createStore, applyMiddleware} from "redux"
import { Provider } from 'react-redux'
import reducer from  './reducer'
import thunkMiddleware  from 'redux-thunk'
import App from './App';


let store = createStore(reducer,applyMiddleware(thunkMiddleware))
ReactDOM.render(
<Provider store={store}>    
  <App />
</Provider>  
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
