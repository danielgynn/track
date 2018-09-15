import React, { Component } from 'react';
import { getAppHeader } from '../actions/actions';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: getAppHeader().header
    };
  }

  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.redirectToLogin();
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  redirectToLogin() {
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="splash-screen splash-image" onClick={ () => this.redirectToLogin() }>
        <div></div>
        <header className="splash-header">
          <h1 className="app-title">{ this.state.header.title }</h1>
          <p className="app-intro">{ this.state.header.subtitle }</p>
        </header>

        <div>
          <p className="helper-text">Click to continue</p>
        </div>
      </div>
    )
  }
}
