import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import App from './App';
import TransProvider from './redux-translator/TransProvider';
import {createPathMappings} from './redux-translator/translator';
import pathMappings from './pathMappings';

import registerServiceWorker from './registerServiceWorker';


const store = applyMiddleware(thunk)(createStore);

createPathMappings(pathMappings);

ReactDOM.render(
  <TransProvider defaultState={{lang: 'en'}}>
    <Provider store={store(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <App />
    </Provider>
  </TransProvider>
  , document.getElementById('root')
);
registerServiceWorker();
