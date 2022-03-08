import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducers/reducers';

let store=createStore(todoApp);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

