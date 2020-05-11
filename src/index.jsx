import React from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import { Provider } from 'react-redux';

import App from './Router';
import store from './auth';

import 'bootswatch/dist/darkly/bootstrap.min.css';

toast.configure();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
