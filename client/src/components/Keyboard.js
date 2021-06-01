import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/ActionCreators';
import loader from '../assets/images/loader.gif';
import PropTypes from 'prop-types';

const Keyboard = ({
  updateWords,
  updateNumbers,
  data,
  getWords,
  isLoading,
}) => {
  const enterControl = (enteredValue) => {
    let validator = /^[2-9]+$/;

    if (String(enteredValue[0][0]).match(validator)) {
      updateNumbers(data + enteredValue[0][0]);
    }
    if (enteredValue[1][0].toLowerCase() === 'delete') {
      updateNumbers(data.slice(0, data.length - 1));
    }
    if (enteredValue[1][0].toLowerCase() === 'clear') {
      updateNumbers('');
      updateWords({
        allWords: [],
        realWords: [],
      });
    }
  };

  const keyboardSchema = [
    [[1], ['@']],
    [[2], ['ABC']],
    [[3], ['DEF']],
    [[4], ['GHI']],
    [[5], ['JKL']],
    [[6], ['MNO']],
    [[7], ['PQRS']],
    [[8], ['TUV']],
    [[9], ['WXYZ']],
    [[], ['DELETE']],
    [[0], ['']],
    [[], ['CLEAR']],
  ];

  return (
    <div className="keyboard">
      {keyboardSchema.map((btn, btnIndex) => (
        <button
          key={`${btnIndex}`}
          onClick={() => enterControl(btn)}
        >
          {btn[0]} <span>{btn[1]}</span>
        </button>
      ))}
      {isLoading ? (
        <img src={loader} alt="loader" />
      ) : (
        <button className="submit" onClick={() => getWords()}>
          Find words
        </button>
      )}
    </div>
  );
};

Keyboard.propTypes = {
  data: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired ,
  getWords: PropTypes.func.isRequired,
  updateWords: PropTypes.func.isRequired,
  updateNumbers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  updateNumbers: (numbers) => dispatch(actionCreators.updateNumbers(numbers)),
  getWords: () => dispatch(actionCreators.getWords()),
  updateWords: (words) => dispatch(actionCreators.updateWords(words)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
