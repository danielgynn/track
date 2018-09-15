import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAppHeader } from '../actions/actions';
import logo from '../logo.svg';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: getAppHeader().header
    };
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">{ this.state.header.title }</h1>
          <p className="app-intro">{ this.state.header.subtitle }</p>

          <Link className="button primary" to="/login">Login</Link>
        </header>
      </div>
    )
  }
}
