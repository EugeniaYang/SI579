import {useState} from "react";

export const description =
'The code in `src/problems/problem_1.js` is supposed to display the text "You clicked the button" after the user clicks the button. However, it does not work. In that file, modify the variable `explanation` to add a plain-English explanation of what is going wrong. Then, edit the `Problem` function to fix the bug.';

const explanation = '(write your explanation here)';

export function Problem () {
    let [buttonClicked, setButtonClicked] = useState(false);

    function onClick() {
        setButtonClicked(true);
    }

    return <>
        <div>{buttonClicked ? "CLICKED!" : "not clicked yet"}</div>
        <button className="btn btn-primary" onClick={onClick}>Click me!</button>
        <p>The variable buttonClicked is not a state, so the content does not change as the value of buttonClicked changes.</p>
    </>
}
