import './RhymeListing.css'
import {useState} from "react";
import WordInstance from "./WordInstance";

const RhymeListing = (props)=> {
    console.log("result")
    console.log(props.rhymedWords)
    const savedWordsArray = [];
    const savedWords = [];


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
    function addToSavedWords(word) {
        // You'll need to finish this...
        savedWordsArray.push(word);
        updateSavedWords()
    }

// Add additional functions/callbacks here.
    function updateSavedWords(){
        savedWords.innerHTML='';
        const len = savedWordsArray.length;
        if (len===0){
            savedWords.innerHTML='(none)'
        }
        else{
            savedWords.innerHTML=savedWordsArray.join()
        }
    }
    const generateRhyme = ()=> {
        let wordOutput = [];

        props.rhymedWords.forEach((wordInstance, index) =>
            // Add an event's "markup" to the eventsToShow array.
            wordOutput.push(
                <WordInstance
                    word={wordInstance.word}
                    key={index}
                    >
                </WordInstance>
            )
        );

        return wordOutput;
    }


    if (props.rhymedWords) {
        console.log(props.rhymedWords)
        return (
            <div className="RhymeListing">
                <h1>Here are the rhymed words!</h1>
                {generateRhyme()}
            </div>
        )
    }
    else {
        return (<div className="RhymeListing" > ?</div>)
    }
}

export default RhymeListing