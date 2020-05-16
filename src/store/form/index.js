import { CHANGE } from '../actionTypes';

const initialState = {
  projectName: '',
  clientName: '',
  month: '',
  year: '',
  campus: '',
  objective: '',
  deploy: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case LOGIN:
    //   return {
    //     ...state,
    //     token: action.payload,
    //     isAuth: true,
    //   };
    // case LOGOUT:
    //   return initialState;
    case CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
