import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="app-header">
          <h1 className="app-title">Login</h1>
          <p className="app-intro">Please enter your username and password to login.</p>
          <Link className="button primary" to="/">Back to Home</Link>
        </header>
      </div>
    )
  }
}
