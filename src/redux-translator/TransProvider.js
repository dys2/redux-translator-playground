import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import transReducer from './transReducer';

export let store;

export default class extends React.Component {
  
  // componentDidMount() {
  //   if (this.props.defaultState)
  //     init(this.props.defaultState)
  // }
  render() {
    store = createStore(transReducer(this.props.defaultState || {}));
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}
// export default ({children, defaultState}) => {
//   const newStore = children.props.store;
//   newStore.replaceReducer(current => ({
//     ...current,
//     locale: transReducer(defaultState)(undefined, {})})
//   ); 
//   store = newStore;
//   newStore.dispatch({type: "@@INIT/LOCALE"});


// };



