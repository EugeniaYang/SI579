import Button from "react-bootstrap/Button";


const WordInstance = (props) => {

    const saveButtonHandler = () => {
        props.setSavedWords((savedWords) => {
            return [...savedWords, props.word]
        })
    }
    return (<li className="WordInstance">
        {props.word}
        <Button variant='outline-success' onClick={saveButtonHandler}>
            Save
        </Button>
    </li>)
}

export default WordInstance;