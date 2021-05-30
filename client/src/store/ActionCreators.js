import * as actionTypes from './ActionTypes';
import axios from 'axios'

export const updateNumbers = numbers => {
  return {
    type: actionTypes.UPDATE_NUMBERS,
    data: numbers,
  };
};

export const setAlert = alert => {
    return {
      type: actionTypes.SET_ALERT,
      data: alert,
    };
  };

const updateWords = payload => {
    return {
      type: actionTypes.UPDATE_PAYLOAD,
      data: payload,
    };
  };

  export const getWords = () => {
	return (dispatch, getState) => {
		// dispatch(isLoading(true));
		axios
      .get(`http://localhost:5000/api/phonewords/${getState().data}`)
      .then((response) => {
        dispatch(updateWords(response.data));
        dispatch(setAlert(''))
      })
		.catch( error => {
			// let newErrors = [...getState().errors];
			// newErrors.push(error);
			// dispatch(updateErrors(newErrors));
			// dispatch(isLoading(false));
            // console.log(error.response.data)
            dispatch(setAlert(error.response.data.error))
		});
	}
}

// export const updatePlayer = playerData => {
//   return {
//     type: actionTypes.PLAYER_UPDATE,
//     player: playerData,
//   };
// };

// export const setAlert = (message, id) => {
//   return {
//     type: actionTypes.SET_ALERT,
//     msg: {
//       text: message,
//       id: id,
//     },
//   };
// };

// export const removeAlert = idOfAlert => {
//   return {
//     type: actionTypes.REMOVE_ALERT,
//     id: idOfAlert,
//   };
// };

// export const setError = (message, id) => {
//   return {
//     type: actionTypes.SET_ERROR,
//     msg: {
//       text: message,
//       id: id,
//     },
//   };
// };

// export const removeError = idOfError => {
//   return {
//     type: actionTypes.REMOVE_ERROR,
//     id: idOfError,
//   };
// };

// export const updateOpponent = opponentData => {
//   return {
//     type: actionTypes.OPPONENT_UPDATE,
//     opponent: opponentData,
//   };
// };

// export const updateCurrentBoard = boardId => {
//   return {
//     type: actionTypes.CURRENT_BOARD_UPDATE,
//     boardId: boardId,
//   };
// };

// export const updateUserBoards = boards => {
//   return {
//     type: actionTypes.USER_BOARDS_UPDATE,
//     userBoards: boards,
//   };
// };