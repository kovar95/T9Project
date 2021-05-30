import * as actionTypes from './ActionTypes';

const initialState = {
  data: '',
  words: {
    realWords: [],
    allWords: [],
  },
  alert: '',
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

    // case actionTypes.OPPONENT_UPDATE:
    //   return {
    //     ...state,
    //     opponent: action.opponent,
    //   };

    // case actionTypes.CURRENT_BOARD_UPDATE:
    //   return {
    //     ...state,
    //     currentBoardId: action.boardId,
    //   };

    // case actionTypes.USER_BOARDS_UPDATE:
    //   return {
    //     ...state,
    //     userBoards: action.userBoards,
    //   };

    // case actionTypes.SET_ALERT:
    //   return {
    //     ...state,
    //     alerts: [...state.alerts, action.msg],
    //   };

    // case actionTypes.REMOVE_ALERT:
    //   return {
    //     ...state,
    //     alerts: state.alerts.filter(alert => alert.id !== action.id),
    //   };

    // case actionTypes.SET_ERROR:
    //   return {
    //     ...state,
    //     errors: [...state.errors, action.msg],
    //   };

    // case actionTypes.REMOVE_ERROR:
    //   return {
    //     ...state,
    //     errors: state.errors.filter(error => error.id !== action.id),
    //   };

    default:
      return state;
  }
};

export { reducer };
