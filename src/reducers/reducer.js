import { combineReducers } from 'redux';
import {
  GET_APP_HEADER,
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR
} from '../actions/actions';

function getAppHeader(state = {}, action) {
  switch (action.type) {
    case GET_APP_HEADER:
      return action.header;
    default:
      return state;
  }
}

function login(state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
}, action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}

const rootReducer = combineReducers({getAppHeader, login});

export default rootReducer;
