
import './App.css';
import RhymeListing from "./components/RhymeListing";
import {useEffect, useState} from "react";

import SearchBar from "./components/SearchBar";


function App() {

    const [rhymedWords, setRhymedWords] = useState([]);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    SI570 RhymeFinder by Eugenia Yang
                </p>
                <SearchBar setRhymedWords={setRhymedWords}/>
                <RhymeListing rhymedWords={rhymedWords}/>
            </header>
        </div>
    );
}

export default App;
