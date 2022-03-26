import './SearchBar.css'
import ShowRhymeButton from "./ShowRhymeButton";
import {useState} from "react";

const SearchBar = (props) => {
    const [theWord, setTheWord] = useState('');
    const getDatamuseRhymeUrl = (rel_rhy) => {
        return `https://api.datamuse.com/words?${new URLSearchParams({
            rel_rhy: theWord,
        }).toString()}`;
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(theWord)
        if (theWord) {

            fetch(getDatamuseRhymeUrl({theWord}))
                .then((response) => response.json())
                .then((json) => props.setRhymedWords(Object.values(json)));

            setTheWord('')
        }
    }

    return (<div>

        <form onSubmit={submitHandler}>

            <input
                type='text'
                value={theWord}
                onChange={(e) => setTheWord(e.target.value)}
            />
            <button type='submit'>Find Rhyme</button>
            <button type='submit'>Find Similar</button>
        </form>
    </div>);
}

export default SearchBar;