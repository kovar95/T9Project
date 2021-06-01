import * as actionTypes from './ActionTypes';
import axios from 'axios';

export const updateNumbers = (numbers) => {
  return {
    type: actionTypes.UPDATE_NUMBERS,
    data: numbers,
  };
};

export const setAlert = (alert) => {
  return {
    type: actionTypes.SET_ALERT,
    data: alert,
  };
};

export const updateWords = (payload) => {
  return {
    type: actionTypes.UPDATE_PAYLOAD,
    data: payload,
  };
};

export const updateLoading = value => {
  return {
    type: actionTypes.UPDATE_LOADING,
    data: value,
  };
};

export const getWords = () => {
  return (dispatch, getState) => {
    dispatch(updateLoading(true));
    axios
      .get(`http://localhost:5000/api/phonewords/${getState().data}`)
      .then((response) => {
        dispatch(updateWords(response.data));
        dispatch(setAlert(''));
        dispatch(updateLoading(false));
      })
      .catch((error) => {
        dispatch(updateLoading(false));
        dispatch(setAlert(error.response.data.error));
      });
  };
};
