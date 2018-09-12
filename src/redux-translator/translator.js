import React from 'react';

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


export const t = (text, ...args) => {

  return localeFile[text] ?
    sprintf(localeFile[text], ...args) :
    sprintf(text, ...args);

};



// export const getLocale = () =>
//   store ?
//     store.getState().locale.lang :
//     'en';

export const trans = (text, ...args) => {
  return <Translator text={text} args={args} />;
}

class Translator extends React.Component {
  componentDidMount() {
    // it remembers to subscribe to the store so it doesn't miss updates
    this.unsubscribe = store.subscribe(this.handleChange)
  }

  componentWillUnmount() {
    // and unsubscribe later
    this.unsubscribe()
  }
  handleChange = () => {
    // and whenever the store state changes, it re-renders.
    this.forceUpdate();
  }
  render() {
    const text = this.props.text;
    const args = this.props.args;
    const lang = store.getState().lang;

    if (!localeFile || !lang)
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