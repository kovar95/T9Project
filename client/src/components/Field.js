import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Input,
  Alert,
} from 'reactstrap';
import Keyboard from './Keyboard';
import Words from './Words';
import { connect } from 'react-redux';
import * as actionCreators from '../store/ActionCreators';

const Field = ({ data, alert, words: { realWords, allWords } }) => {
  return (
    <div className="main-div">
      <div className="side-div">
        <textarea
          placeholder="Write your word --->"
          defaultValue={data}
        />
        <Keyboard />
      </div>
      <Words/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Field);
