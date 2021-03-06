import React from 'react';
import { sprintf } from 'sprintf-js';

import {store} from './TransProvider';


let mappings = {};

export const createPathMappings = exactMappings =>
  mappings = exactMappings;

let localeFile = {};

export const updateLocaleFile = (lang) =>
  localeFile = mappings[lang]();

export const t = (text, ...args) =>
  localeFile[text] ?
    sprintf(localeFile[text], ...args) :
    sprintf(text, ...args);



export const trans = (text, ...args) =>
  <Translator text={text} args={args} />;



class Translator extends React.Component {

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.handleChange)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleChange = () =>
    this.forceUpdate();


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