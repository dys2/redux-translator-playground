import {
  SET_LOCALE
} from './transActions';

const initialState = {
  lang: 'en'
}

export default additionalState => (state = {...initialState, ...additionalState}, action) => {

  console.log(action, state);
  switch(action.type) {
    case SET_LOCALE:
      console.log(action);
      return {...state, ...action.data}
    default:
      console.log(action);
      return state;
  }
}