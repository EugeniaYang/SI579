import {useRef, useState} from 'react';

export const description = 'The code in `src/problems/problem_3.js` is supposed to Display the string written in the text box when you click the Display button but it isn\'t working It should appear in this format "You wrote: [string in textbox]" In that file, modify the variable `explanation` to add a plain-English explanation of what is going wrong. Then, edit the `Problem` function to fix the bug.';

const explanation = 'the userWrote does not get updated after executing the function, so we are still using the input value';

export function Problem() {
    const [userWrote, setUserWrote] = useState('');
    const [output, setOutput] = useState('Nothing yet');
    const inputRef = useRef();

    function onClick() {
        setUserWrote(inputRef.current.value);
        setOutput(`You wrote: ${inputRef.current.value}`);

        inputRef.current.value = '';
        inputRef.current.focus();
    }
    return <>
        <div>{output}</div>
        <input ref={inputRef} type="text" /><button className="btn btn-primary" onClick={onClick}>Display</button>
        <p>{explanation}</p>
    </>
}
