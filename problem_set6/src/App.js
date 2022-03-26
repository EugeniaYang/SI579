import logo from './logo.svg';
import './App.css';
import RhymeListing from "./components/RhymeListing";
import { useEffect, useState } from "react";
import ShowRhymeButton from "./components/ShowRhymeButton";
import SearchBar from "./components/SearchBar";


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
        <p>
          SI570 RhymeFinder by Eugenia Yang
        </p>
          <SearchBar setRhymedWords={setRhymedWords} />
        <RhymeListing rhymedWords ={rhymedWords} />
      </header>
    </div>
   );
}

export default App;
