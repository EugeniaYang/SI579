import logo from './logo.svg';
import './App.css';
import RhymeListing from "./components/RhymeListing";
import { useEffect, useState } from "react";
import ShowRhymeButton from "./components/ShowRhymeButton";


function App() {

    const [rhymedWords, setRhymedWords] = useState([]);
    const [inputWord, setInputWord] = useState([]);
    useEffect(() => {
        fetch(`https://api.datamuse.com/words?${new URLSearchParams({rel_rhy: "school".value,}).toString()}`)
            .then((response) => response.json())
            .then((json) =>setRhymedWords(Object.values(json)));
    }, []);



  return (
    <div className="App">
      <header className="App-header">
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
          Hello World! Time to learn React!
        </a>
        <ShowRhymeButton setRhymedWords={setRhymedWords} />
        <RhymeListing rhymedWords ={rhymedWords} />
      </header>
    </div>
   );
}

export default App;
