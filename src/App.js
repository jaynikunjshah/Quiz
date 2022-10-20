import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Quiz from './components/Quiz';
import QuizSingleCorr from './components/QuizSingleCorr';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>Welcome to the Quiz App</h1>
      <Login />
      <br />
      <footer className='footer'>Made with &hearts; by Jay</footer>
    </div>
  );
}

export default App;
