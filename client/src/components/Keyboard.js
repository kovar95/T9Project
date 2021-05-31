import React, { Fragment } from 'react';
import { Row, Col, Button } from 'reactstrap';
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
    [
      [[1], ['@']],
      [[2], ['ABC']],
      [[3], ['DEF']],
    ],
    [
      [[4], ['GHI']],
      [[5], ['JKL']],
      [[6], ['MNO']],
    ],
    [
      [[7], ['PQRS']],
      [[8], ['TUV']],
      [[9], ['WXYZ']],
    ],
    [
      [[], ['DELETE']],
      [[0], []],
      [[], ['CLEAR']],
    ],
  ];

  return (
    <Fragment>
      {keyboardSchema.map((row, rIndex) => (
        <Row key={rIndex}>
          {row.map((btn, btnIndex) => (
            <Col xs="6" sm="4">
              {' '}
              <Button
                className="secondary text-light m-1 p-2 key"
                style={{ fontSize: '20px' }}
                key={`${rIndex}${btnIndex}`}
                onClick={() => enterControl(btn)}
              >
                {btn[0]} <span style={{ fontSize: '12px' }}>{btn[1]}</span>
              </Button>
            </Col>
          ))}
        </Row>
      ))}
     <Button color='outline-primary m-1' onClick={() => getWords()}>Find words</Button>
    </Fragment>
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
