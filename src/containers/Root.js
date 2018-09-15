import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import { getAppHeader } from '../actions/actions';
import logo from '../logo.svg';

const store = configureStore();

export default class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: getAppHeader().header
    };
  }

  render() {
    return(
      <Provider store={ store }>
        <div className="app">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">{ this.state.header.title }</h1>
            <p className="app-intro">{ this.state.header.subtitle }</p>
          </header>
        </div>
      </Provider>
    )
  }
}
