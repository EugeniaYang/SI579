import './RhymeListing.css'
import {useState} from "react";

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
        if (Object.keys(props.rhymedWords).length === 0) {
            wordOutput.innerHTML = "(no results)";
        } else {
            let grouped_data = groupBy(props.rhymedWords, "numSyllables");
            wordOutput.innerHTML = "";
            for (let group in grouped_data) {
                wordOutput.innerHTML += `<h3>Syllables: ${group}</h3><ul>`;
                for (let item of grouped_data[group]) {
                    wordOutput.innerHTML += `<li>${item["word"]}<button type="button" class="btn select" style="background-color:green; color:white" onclick="addToSavedWords('${item["word"]}')">(save)</button>
          </li>`;
                }
                wordOutput.innerHTML += `</ul>`;
            }
        }
        return wordOutput;
    }


    if (props.rhymedWords.length > 0) {
        console.log(props.rhymedWords)
        return (
            <div className="RhymeListing">
                <h1>Here are the rhymed words!</h1>
                <p> {generateRhyme()} </p>
            </div>
        )
    }
    else {
        return (<div className="RhymeListing" > ?</div>)
    }
}

export default RhymeListing