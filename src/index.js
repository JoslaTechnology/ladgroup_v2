import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import { store } from './createStore.js';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
