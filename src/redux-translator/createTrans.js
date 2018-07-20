import { createStore } from 'redux';
import { combineReducers } from 'redux';

import transReducer from './transReducer';


export default defaultLang => ({locale: transReducer({lang: defaultLang})});

