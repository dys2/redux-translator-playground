import {
  SET_LOCALE
} from './transActions';
import{ updateLocaleFile } from './translator';


const initialState = {
  lang: 'en'
}

export default defaultState => (state = {...initialState, ...defaultState}, action) => {
  switch(action.type) {
    case SET_LOCALE:
      return {...state, ...action.data};
    default:
      updateLocaleFile(state.lang);
      return state;
  }
}