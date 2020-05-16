/* eslint-disable import/prefer-default-export */

import { toast } from 'react-toastify';

import { SUBMIT, CHANGE } from '../actionTypes';

export const submit = () => (dispatch) => {
  dispatch({ type: SUBMIT });
  toast.info('Coming soon...', {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const handleChange = (payload) => (dispatch) => {
  dispatch({ type: CHANGE, payload: { ...payload } });
};
