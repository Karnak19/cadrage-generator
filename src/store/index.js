import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import auth from './auth';
import form from './form';

export default createStore(
  combineReducers({ auth, form }),
  composeWithDevTools(applyMiddleware(thunk))
);
