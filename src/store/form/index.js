import { CHANGE } from '../actionTypes';

const initialState = {
  projectName: '',
  clientName: '',
  month: '',
  year: '',
  campus: '',
  objective: '',
  deploy: false,
  duration: '8',
  startingDate: '',
  endingDate: '',
  browsers: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
