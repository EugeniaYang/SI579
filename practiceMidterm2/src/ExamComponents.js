import {useState } from 'react';
import ReactMarkdown from 'react-markdown'

export function MidtermExamHeader({name, instructions}) {
    return <header className="container">
        <div className="row"><h1 className="col">{name}</h1></div>
        <div className="row"><div className="col exam instructions">
            <ReactMarkdown children={instructions} />
        </div></div>
    </header>;
}

export function Problem({number, description, sampleOutputGifURL, children}) {
    const [showSampleOutput, setShowSampleOutput] = useState(false);
    return <section className="container">
    <div className="row">
        <h2 className="col">Problem {number}</h2>
    </div>
    <div className="row">
        <div className="col problem instructions">
            <ReactMarkdown children={description} />
        </div>
    </div>
    <div className="row">
        <div className="sample-output col">
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => setShowSampleOutput(!showSampleOutput)}>{showSampleOutput ? "Hide desired result GIF" : "Show a GIF of the desired result"}</button>
            {showSampleOutput && <img src={sampleOutputGifURL} alt='example of problem' />}
        </div>
    </div>
    <div className="execution row">
        <div className="col">
            {children}
        </div>
    </div>
</section>
}
