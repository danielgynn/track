import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'Track App',
      introText: `Keep track of your progress towards achieving personal goals and habits.`
    };
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">{ this.state.header }</h1>
          <p className="app-intro">{ this.state.introText }</p>
        </header>
      </div>
    );
  }
}

export default App;
