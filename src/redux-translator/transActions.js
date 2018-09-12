import { updateLocaleFile } from './translator';
import {store} from './TransProvider';


export const SET_LOCALE = "@@LOCALE//SET_LOCALE";


export const setLocale = lang => {
  store.dispatch({
    type: SET_LOCALE,
    data: { lang }
  });
  updateLocaleFile(lang);
};