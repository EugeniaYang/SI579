import {useState} from "react";
import Button from 'react-bootstrap/Button';
import {Form, FormControl, InputGroup} from "react-bootstrap";

const SearchBar = (props) => {
    const [theWord, setTheWord] = useState('');
    const [outputDescription, setOutputDescription] = useState('')
    const getDatamuseRhymeUrl = (rel_rhy) => {
        return `https://api.datamuse.com/words?${new URLSearchParams({
            rel_rhy: theWord,
        }).toString()}`;
    }

    function getDatamuseSimilarToUrl(ml) {
        return `https://api.datamuse.com/words?${new URLSearchParams({
            ml: theWord,
        }).toString()}`;
    }

    const findRhyme = (e) => {
        props.setType('rhyme')
        e.preventDefault();
        setOutputDescription('Words that rhymes with '+ `${theWord}`)
        if (theWord) {
            fetch(getDatamuseRhymeUrl({theWord}))
                .then((response) => response.json())
                .then((json) => props.setRhymedWords(Object.values(json)));
            // setTheWord('')
        }
    }

    const findSimilar = (e) => {
        props.setType('similar')
        e.preventDefault();
        setOutputDescription('Words with a similar meaning to '+ `${theWord}`)
        if (theWord) {
            props.setRhymedWords('...loading');
            fetch(getDatamuseSimilarToUrl({theWord}))
                .then((response) => response.json())
                .then((json) => props.setRhymedWords(Object.values(json)));
            // setTheWord('')
        }
    }

    return (<div>
        <Form>
            <InputGroup>
                <FormControl
                    type='text'
                    value={theWord}
                    onChange={(e) => setTheWord(e.target.value)}
                />
                <Button variant="primary" type='submit' onClick={findRhyme}>Show rhyming words</Button>
                <Button variant="secondary" type='submit' onClick={findSimilar}>Show synonyms</Button>
            </InputGroup>
        </Form>
        <h2>{outputDescription}</h2>
    </div>);
}

export default SearchBar;