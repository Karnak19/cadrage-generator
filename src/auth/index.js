import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { LOGIN, LOGOUT } from './actionTypes';

const initialState = {
  token: null,
  isAuth: true,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
        isAuth: true,
      };
    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
