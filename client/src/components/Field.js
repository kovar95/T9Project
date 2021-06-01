import React from 'react';
import Keyboard from './Keyboard';
import Words from './Words';
import { connect } from 'react-redux';
import * as actionCreators from '../store/ActionCreators';
import PropTypes from 'prop-types';

const Field = ({ data, alert}) => {
  return (
    <div className="main-div">
      <div className="side-div">
        <textarea
          placeholder="Welcome to T9 phoneword converter. Write your word to se the result --->"
          value={data}
          onChange={(e) => console.log(e.target.value)}
        />
        {alert && <div className='alert'>{alert}</div>}
        <Words/>
        <Keyboard />
      </div>
    </div>
  );
};

Field.propTypes = {
  data: PropTypes.string.isRequired,
  alert: PropTypes.string.isRequired ,
  words: PropTypes.object.isRequired,
  updateNumbers: PropTypes.func.isRequired,
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
