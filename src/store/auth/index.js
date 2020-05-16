import { LOGIN, LOGOUT } from '../actionTypes';

const initialState = {
  token: null,
  isAuth: true,
};

export default function reducer(state = initialState, action) {
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
