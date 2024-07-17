import logo from './logo.svg';
import './App.css';
import Quill from '../../my-new-react-app/src/Quill';
import Edtr from '../../my-new-react-app/src/Editor';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Quill/>
      <Edtr/>
    </div>
  );
}

export default App;
