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
