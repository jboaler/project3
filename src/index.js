import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import allReducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

const shop = createStore(
  allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
 
const DATA = [
  { id: "item0", name: "work out", completed: true },

  { id: "item1", name: "make breakfast", completed: false },

  { id: "item2", name: "take a shower", completed: false }
];

ReactDOM.render(
<Provider shop={shop}>
  <App tasks={DATA} />
</Provider>  
,document.getElementById("root"));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
