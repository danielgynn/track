import { combineReducers } from 'redux';
import { GET_APP_HEADER } from '../actions/actions';

function getAppHeader(state = {}, action) {
  switch (action.type) {
    case GET_APP_HEADER:
      return action.header;
    default:
      return state;
  }
}

const rootReducer = combineReducers({getAppHeader});

export default rootReducer;
