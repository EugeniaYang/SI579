
import WordInstance from "./WordInstance";

const SyllableInstance = (props) => {

    const generateGroup = () => {
        let wordOutput = [];
        props.words.forEach((wordInstance, index) =>
            wordOutput.push(
                <WordInstance
                    word={wordInstance.word}
                    key={index}
                    setSavedWords={props.setSavedWords}
                >
                </WordInstance>
            )
        );
        return wordOutput;
    }

    return (<ul> {generateGroup()}</ul>)
}

export default SyllableInstance;