import './RhymeListing.css'

const RhymeListing = (props)=> {
    console.log("result")
    console.log(props.rhymedWords)
    return (
        <div className="RhymeListing">
            <h1>Here are the rhymed words!</h1>
            <p>{props.words}</p>
        </div>
    )
}

export default RhymeListing