const SavedWords = (props) => {

    const showSavedWords = () => {
        const len = props.savedWords.length;
        if (len === 0) {
            return ('none')
        } else {
            return props.savedWords.join();
        }
    }

    return (<div>
        <p>Saved words: {showSavedWords()}</p>
    </div>)
}

export default SavedWords;