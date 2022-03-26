import './WordInstance.css';
import SaveButton from "./SaveButton";
import {useState} from "react";

const WordInstance = (props) => {
    // const [isStarred, setIsStarred] = useState(false);
    return <li className="WordInstance">
        {props.word}
        <SaveButton/>
    </li>
}

export default WordInstance;