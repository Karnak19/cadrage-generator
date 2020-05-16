import React from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import { Provider } from 'react-redux';

import Router from './Router';
import store from './store';

import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

toast.configure();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
