import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import createTrans from './createTrans';
import transReducer from './transReducer';
import { updateLocaleFile } from './translator';

export let store;

export default ({children, defaultState}) => {
  const newStore = children.props.store;
  newStore.replaceReducer(current => ({
    ...current,
    locale: transReducer(defaultState)(undefined, {})})
  ); 
  store = newStore;
  newStore.dispatch({type: "@@INIT/LOCALE"});

  return (
    <Provider store={newStore}>
      {children.props.children}
    </Provider>
  )
};




// export const setLocale = 
//   lang =>
//     async (dispatch) => {

//       updateLocaleFile(lang);

//       dispatch({
//         type: SET_LOCALE,
//         data: { lang, langCode: langTypeIds[lang] }
//       });
// 