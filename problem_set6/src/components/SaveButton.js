import './SaveButton.css';
import { useState } from 'react';

const SaveButton = (props) => {
    const [isStarred, setIsStarred] = useState(false);

    const starButtonHandler = ()=>{

    }


    return (
        <button onClick={starButtonHandler} >
        Save
    </button>)
}

export default SaveButton;