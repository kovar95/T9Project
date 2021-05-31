import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/ActionCreators';

const Keyboard = ({updateNumbers, data, getWords}) => {

  const enterControl = (enteredValue) => {
    let validator = /^[2-9]+$/;
    
    if (String(enteredValue[0][0]).match(validator)) {
      updateNumbers(data + enteredValue[0][0])
    } 
    if (enteredValue[1][0].toLowerCase() === 'delete') {
      updateNumbers(data.slice(0, data.length - 1))
    }
    if (enteredValue[1][0].toLowerCase() === 'clear') {
      updateNumbers('')
    }
  }

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
      [[0], []],
      [[], ['CLEAR']], 
  ];

  return (
    <div className='keyboard'>
          {keyboardSchema.map((btn, btnIndex) => (
              <button
                style={{ fontSize: '20px' }}
                key={`${btnIndex}`}
                onClick={() => enterControl(btn)}
              >
                {btn[0]} <span style={{ fontSize: '12px' }}>{btn[1]}</span>
              </button>
          ))}
     <button className='submit' onClick={() => getWords()}>Find words</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  updateNumbers: (numbers) => dispatch(actionCreators.updateNumbers(numbers)),
  getWords: () => dispatch(actionCreators.getWords()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
