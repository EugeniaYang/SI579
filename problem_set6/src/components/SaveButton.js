import './SaveButton.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
const SaveButton = (props) => {
    const [isSave, setIsSaved] = useState(false);

    const starButtonHandler = ()=>{

    }


    return (
        <Button variant='success' onClick={starButtonHandler} >
        Save
    </Button>)
}

export default SaveButton;