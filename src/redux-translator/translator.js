import React from 'react';

import { connect } from 'react-redux';
import { sprintf } from 'sprintf-js';


import {store} from './TransProvider';

let mappings = {};

export const createPathMappings = exactMappings => {
  mappings = exactMappings;
}

let localeFile = {};

export const updateLocaleFile = (lang) => {
  localeFile = mappings[lang]();
}



// export const updateRoute = (lang, path) =>
//   `/${lang}${path.slice(3)}`;


// export const t = (text, ...args) => {

//   return localeFile[text] ?
//     sprintf(localeFile[text], ...args) :
//     sprintf(text, ...args);

// };



// export const getLocale = () =>
//   store ?
//     store.getState().locale.lang :
//     'en';

export const trans = (text, ...args) => {
  const locale = store.getState().locale;
  return <Translator locale={locale} text={text} args={args} />;
}

class Translator extends React.Component {
  render() {
    const text = this.props.text;
    const args = this.props.args;

    if (!localeFile || !this.props.locale)
      return <React.Fragment>{ sprintf(text, ...args) }</React.Fragment>;
      
    return (
      <React.Fragment>
        {
          localeFile[text] ?
            sprintf(localeFile[text], ...args) :
            sprintf(text, ...args)
        }
      </React.Fragment>
    )
  };
}