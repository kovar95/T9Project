import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Input,
  Alert,
} from 'reactstrap';
import arrow from '../assets/images/arrow.png';
import { connect } from 'react-redux';
import * as actionCreators from '../store/ActionCreators';

const Words = ({ alert, words: { realWords, allWords } }) => {
  const [showRealWords, setRealWords] = useState();
  const [showAllWords, setAllWords] = useState();

  return (
    <div className="side-div">
        <h5 className="word-heading" style={{zIndex:'1'}}>
        Number of real words: <strong className="">{realWords.length}</strong>
        <img
          src={arrow}
          alt="arrow"
          onClick={() => setRealWords(!showRealWords)}
        />
        {showRealWords && (
          <ul>
            {realWords.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        )}
      </h5>
      <hr />
      <h5 className="word-heading">
        Total number of words: <strong className="">{allWords.length}</strong>
        <img src={arrow} alt="arrow"  onClick={() => setAllWords(!showAllWords)} />
        {showAllWords && (
          <ul>
            {allWords.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        )}
      </h5>

      
      {alert && <Alert color="warning">{alert}</Alert>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  alert: state.alert,
  words: state.words,
});

const mapDispatchToProps = (dispatch) => ({
  updateNumbers: (numbers) => dispatch(actionCreators.updateNumbers(numbers)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Words);
