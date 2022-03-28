import {useEffect, useState} from "react";

export const description =
    'Write code that starts counting up when the user clicks "Start".\
     in order to do this, you will need to use an [effect hook; `useEffect()`](https://reactjs.org/docs/hooks-effect.html)\
     (and [this explanation](https://reactgo.com/react-setinterval/) might help).';

export function Problem() {

    const [time, setTime] = useState(0)
    const [active, setActive] = useState(false)
    useEffect(() => {
        let interval = null;
        if (active) {
            setInterval(() => {
                setTime(time + 1);
                return time
            }, 1000)
        } else {
            clearInterval(interval);
        }

    });


    function start() {
        setActive(true)
    }

    return <>{time}
        <button className="btn btn-primary" onClick={start}>Start</button>
    </>;
}
