import React from 'react';
import ReactDOM from 'react-dom';
import Route from './routes/router.js';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {authReducer} from './reducers/navReducer.js';

const store = createStore(authReducer);

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
