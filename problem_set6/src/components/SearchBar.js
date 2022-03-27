import './SearchBar.css'
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import { Form, FormControl, InputGroup} from "react-bootstrap";

const SearchBar = (props) => {
    const [theWord, setTheWord] = useState('');
    const getDatamuseRhymeUrl = (rel_rhy) => {
        return `https://api.datamuse.com/words?${new URLSearchParams({
            rel_rhy: theWord,
        }).toString()}`;
    }

    const findRhyme = (e) => {
        e.preventDefault();
        console.log(theWord)
        if (theWord) {
            fetch(getDatamuseRhymeUrl({theWord}))
                .then((response) => response.json())
                .then((json) => props.setRhymedWords(Object.values(json)));

            setTheWord('')
        }
    }

    const findSimilar = (e) => {
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
            <Form >
                <InputGroup>
                <FormControl
                    type='text'
                    value={theWord}
                    onChange={(e) => setTheWord(e.target.value)}
                />
                    <Button variant="primary" type='submit' onClick={findRhyme}>Find Rhyme</Button>
                    <Button variant="secondary" type='submit' onClick={findSimilar}>Find Similar</Button>
                </InputGroup>
            </Form>
    </div>);
}

export default SearchBar;