import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware }  from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

import reducers from './reducers'

import './index.css';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducers,
  applyMiddleware(
    logger,
    thunkMiddleware
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
