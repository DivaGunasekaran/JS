import logo from "./logo.svg";
import "./App.css";
import MyEditor from "./Quill";
import Pagination from "./Pagination";


const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  // add more items as needed
];

function App() {
  return (
    <div className="App">
      <div>
        <h1>Paginated List</h1>
        <Pagination itemsPerPage={5} items={items} />
      </div>

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
      <MyEditor />
    </div>
  );
}

export default App;
