import './SearchBar.css'
import {useState} from "react";
import {Button} from "bootstrap";
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
            <Button variant="primary" type='submit' >Find Rhyme</Button>
            <Button variant="secondary" type='submit' >Find Similar</Button>
        </form>
    </div>);
}

export default SearchBar;