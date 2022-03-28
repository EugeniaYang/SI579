import WordInstance from "./WordInstance";
import SyllableInstance from "./SyllableInstance";

const RhymeListing = (props) => {
    function groupBy(objects, property) {
        // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
        // value for property (obj[property])
        if (typeof property !== "function") {
            const propName = property;
            property = (obj) => obj[propName];
        }

        const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
        for (const object of objects) {
            const groupName = property(object);
            //Make sure that the group exists
            if (!groupedObjects.has(groupName)) {
                groupedObjects.set(groupName, []);
            }
            groupedObjects.get(groupName).push(object);
        }

        // Create an object with the results. Sort the keys so that they are in a sensible "order"
        const result = {};
        for (const key of Array.from(groupedObjects.keys()).sort()) {
            result[key] = groupedObjects.get(key);
        }
        return result;
    }

    const generateWords = () => {
        let wordOutput = [];
        if (props.rhymedWords === '...loading')
            return (<p>...loading</p>)
        if (props.type === 'rhyme') {
            if (props.rhymedWords.length === 0)
                return <p>(no results)</p>
            const groupedWords = groupBy(props.rhymedWords, 'numSyllables');
            Object.entries(groupedWords).map(([key, value]) => {
                wordOutput.push(<h3 key={-key}>{key} syllable:</h3>);
                wordOutput.push(<SyllableInstance key={key} words={value} setSavedWords={props.setSavedWords}/>);
            })
        } else if (props.type === 'similar') {
            if (props.rhymedWords.length === 0)
                return <p>(no results)</p>
            props.rhymedWords.forEach((wordInstance, index) =>
                wordOutput.push(
                    <WordInstance
                        word={wordInstance.word}
                        key={index}
                        setSavedWords={props.setSavedWords}
                    >
                    </WordInstance>
                ))
        }

        return wordOutput;
    }


    return (
        <div className="RhymeListing">
            {generateWords()}
        </div>
    )
}

export default RhymeListing