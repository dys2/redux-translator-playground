import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import transReducer from './transReducer';

export let store;

export default class extends React.Component {
  render() {
    store = createStore(transReducer(this.props.defaultState || {}));
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}



