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
import { connect } from 'react-redux';
import * as actionCreators from '../store/ActionCreators';

const Field = ({ data, alert, words: { realWords, allWords } }) => {

  return (
    <Container className="m-5">
      <Row>
        <Col xs="6">
          <Row>
            <Col xs="12" md={{ size: 8, offset: 2 }}>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Write your word"
                  value={data}
                  className="mb-1"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col xs="12" md={{ size: 8, offset: 2 }}>
              <Keyboard />
            </Col>
          </Row>
        </Col>
        <Col xs="6">
          <h5 style={{textAlign:'left'}} className='p-1'>Total number of words: <strong className='bg-secondary text-light p-1 rounded'>{allWords.length}</strong></h5>
          <h5 style={{textAlign:'left'}} className='p-1'>Number of real words: <strong className='bg-secondary text-light p-1 rounded'>{realWords.length}</strong></h5>
          <hr />
            {alert && <Alert color="warning">{alert}</Alert>}
            <Row>
            {realWords.map((word) => (
              <Col key={word}>
                <Button>
                {word}
                </Button>
                </Col>
            ))}
            </Row>
        </Col>
      </Row>
    </Container>
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
