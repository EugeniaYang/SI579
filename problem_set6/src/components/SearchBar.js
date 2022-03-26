import './SearchBar.css'
import ShowRhymeButton from "./ShowRhymeButton";

const SearchBar=(props)=>{
    return (<div><ShowRhymeButton setRhymedWords={props.setRhymedWords}>?</ShowRhymeButton></div>);
}

export default SearchBar;