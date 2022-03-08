import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootreducer from './reducers/rootReducer';

const store=createStore(rootreducer);


ReactDOM.render(
  <React.StrictMode>
    <provider store={store}><App /></provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

