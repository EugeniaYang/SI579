import './ShowRhymeButton.css'
import {useState} from "react";

const ShowRhymeButton = (props)=> {
    const [theWord, setTheWord] = useState('');

    const submitHandler= (e)=>{
        e.preventDefault();
        console.log('submit')
        props.setRhymedWords((rhymedWords) => {
            return (
                rhymedWords
            )
        });
        setTheWord('')
    }

    return (
        <div className="ShowRhymeButton">
                <button onClick={submitHandler}>ShowRhymedWords</button>
        </div>
    )
}

export default ShowRhymeButton