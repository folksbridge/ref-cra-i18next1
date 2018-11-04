import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { translate, Trans } from 'react-i18next';

class App extends Component {
  render() {
    const { t, i18n } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">Welcome to React</h1> */}
          <h1 className="App-title"> 
            { t('welcome.title', { framework: "react-i18next" }) }
          </h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          <Trans i18nKey='welcome.intro'>
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <button onClick={() => i18n.changeLanguage('de')}>de</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
      </div>
    );
  }
}

export default translate('common')(App);   // instead of "export default App;"
