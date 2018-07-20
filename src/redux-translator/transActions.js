import { updateLocaleFile } from './translator';
import {store} from './TransProvider';


export const SET_LOCALE = "SET_LOCALE";



export const setLocale = lang => {
  console.log(store);
  store.dispatch({
    type: SET_LOCALE,
    data: { lang }
  });
  updateLocaleFile(lang);
};