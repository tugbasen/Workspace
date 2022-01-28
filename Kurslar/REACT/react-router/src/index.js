import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer/rootReducer';


const store = createStore();

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);

