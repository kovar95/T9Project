import './App.scss';
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
});

export default connect(mapStateToProps)(App);
