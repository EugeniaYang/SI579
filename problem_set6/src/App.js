import './App.css';
import RhymeListing from "./components/RhymeListing";
import {useEffect, useState} from "react";
import SearchBar from "./components/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import SavedWords from "./components/SavedWords";

function App() {

    const [rhymedWords, setRhymedWords] = useState([]);
    const [type, setType] = useState([])
    const [savedWords, setSavedWords] = useState([]);
    return (
        <Container>
            <header className="App-header">
                <h1>
                    Rhyme Finder (579 Problem Set 5)
                </h1>
                <SavedWords savedWords={savedWords}>saved words</SavedWords>
                <SearchBar setRhymedWords={setRhymedWords} setType={setType}/>
                <RhymeListing rhymedWords={rhymedWords} setSavedWords={setSavedWords} type={type}/>
            </header>
        </Container>
    );
}

export default App;
