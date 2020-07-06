import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM, { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import { store } from './createStore.js';

import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Provider store={store}><App /></Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );



const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<React.Fragment>

    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </React.Fragment>, rootElement);
} else {
  render(<React.Fragment>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </React.Fragment >, rootElement);
}
