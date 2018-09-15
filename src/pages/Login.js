import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions/actions';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    let { email, password } = this.state;
    this.props.login(email, password);

    this.timeoutHandle = setTimeout(() => {
      if (this.props.isLoginSuccess) {
        this.props.history.push('/');
      }
    }, 1000);
  }

  render() {
    let { email, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;

    return (
      <div className="splash-screen splash-image splash-center">
        <header className="splash-login-box">
          <h1 className="app-title">Login</h1>

          <form onSubmit={ (e) => this.submitForm(e) } name="form">
            <input className="primary" type="email" placeholder="jeffgoldblum@gmail.com" name="email" onChange={ (e) => this.setState({email: e.target.value}) } value={ email } />
            <input className="primary" type="password" placeholder="password" name="password" onChange={ (e) => this.setState({password: e.target.value}) } value={ password }/>

            <button className="button primary wide" disabled={ !this.state.email || !this.state.password } type="submit">Login</button>

            { isLoginPending && <p>Please wait...</p> }
            { loginError && <p>{ loginError.message }</p> }
          </form>
        </header>



        <Link to="/" className="helper-text">Create an Account</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.login.isLoginPending,
    isLoginSuccess: state.login.isLoginSuccess,
    loginError: state.login.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
