import React, { Component } from 'react';
import { connect } from 'react-redux';

import { trans } from './redux-translator/translator';
import logo from './logo.svg';
import './App.css';

import { setLocale } from './redux-translator/transActions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={() => setLocale('es')}>ES</button>
        <button onClick={() => setLocale('en')}>EN</button>
        <p className="App-intro">
          {trans('hello')}
        </p>
      </div>
    );
  }
}

export default connect(state => state)(App);
