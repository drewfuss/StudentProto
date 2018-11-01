import React from 'react';
import ReactDOM from 'react-dom';
import Route from './routes/router.js';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import reducer from './reducers/navReducer';

const middleware = applyMiddleware(logger);
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
