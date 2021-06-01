import * as actionTypes from './ActionTypes';

const initialState = {
  data: '',
  words: {
    realWords: [],
    allWords: [],
  },
  alert: '',
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_NUMBERS:
      return {
        ...state,
        data: action.data,
      };

    case actionTypes.UPDATE_PAYLOAD:
      return {
        ...state,
        words: action.data,
      };

    case actionTypes.SET_ALERT:
      return {
        ...state,
        alert: action.data,
      };

    case actionTypes.UPDATE_LOADING:
      return {
        ...state,
        isLoading: action.data,
      };

    default:
      return state;
  }
};

export { reducer };
