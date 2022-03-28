import {useState} from "react";

export const description =
    'Write code to create a `<button className="btn btn-secondary" />` element that displays how many times it has been clicked. If it has been clicked {n} times it should say "Clicked {n} time(s)". Your code should correctly handle pluralization (for example, "Clicked 1 time" or "Clicked 2 time**s**")';

export function Problem() {

    const [timeCount, setTimeCount] = useState(0);

    function OnClick() {
        setTimeCount(timeCount + 1);
    }

    const generateWords = () => {
        let output = "Clicked ";
        output += timeCount;
        if (timeCount === 1) output += " times"
        else output += " time"
        return output;
    }


    return <button className="btn btn-primary" onClick={OnClick}>{generateWords()}</button>
}
