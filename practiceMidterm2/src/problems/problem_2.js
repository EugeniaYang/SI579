import {useState} from 'react';

export const description =
    'The code in `src/problems/problem_2.js` is supposed to add a new list item (with the text `"Item number {x}"`) every time the user clicks the "Add an item" button. However, it does not work. In that file, modify the variable `explanation` to add a plain-English explanation of what is going wrong. Then, edit the `Problem` function to fix the bug.';

const explanation = 'The setItem function should receive a string as the value(argument), which means that there should be a functions whose return value is the new items variable';

let numItems = 1;

export function Problem() {
    const [items, setItems] = useState(['Item zero']);

    const itemElements = items.map((i) => <li key={i}>{i}</li>)

    function addItem() {
        setItems(
            (items)=>{
                return [...items,`Item number ${numItems++}` ]
            }
        );
    }

    return <>
        <ul>{itemElements}</ul>
        <button className="btn btn-primary" onClick={addItem}>Add an item</button>
        <p>{explanation}</p>
    </>
}
