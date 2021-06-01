import React, { useState } from 'react';
import arrow from '../assets/images/arrow.png';
import { connect } from 'react-redux';
import * as actionCreators from '../store/ActionCreators';
import PropTypes from 'prop-types';

const Words = ({ words: { realWords, allWords } }) => {

  const [showRealWords, setRealWords] = useState();

  return (
      <div className="suggestions">
        Suggestions: {realWords.length} of {allWords.length}
        <img
          src={arrow}
          alt="arrow"
          onClick={() => setRealWords(!showRealWords)}
        />
        {showRealWords && (
          <div className="words">
            {realWords.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
        )}
      </div>
  );
};

Words.propTypes = {
  data: PropTypes.string.isRequired,
  alert: PropTypes.string.isRequired ,
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

export default connect(mapStateToProps, mapDispatchToProps)(Words);
