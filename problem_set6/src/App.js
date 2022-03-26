import './App.css';
import RhymeListing from "./components/RhymeListing";
import {useEffect, useState} from "react";
import SearchBar from "./components/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import SavedWords from "./components/SavedWords";

function App() {

    const [rhymedWords, setRhymedWords] = useState([]);

    return (
        <Container>
            <header className="App-header">
                <h1>
                    Rhyme Finder (579 Problem Set 5)
                </h1>
                <SavedWords>saved words</SavedWords>
                <SearchBar setRhymedWords={setRhymedWords}/>
                <RhymeListing rhymedWords={rhymedWords}/>
            </header>
        </Container>
    );
}

export default App;
