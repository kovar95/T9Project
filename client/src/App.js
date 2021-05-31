import './App.scss';
import 'reactstrap/dist/reactstrap.min.js';
import Header from './components/Header'
import Field from './components/Field'
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
        <Header/>
        <Field/>
    </div>
  );
}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(App);
