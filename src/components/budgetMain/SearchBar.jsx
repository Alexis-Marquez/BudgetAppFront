import React from "react";
import"./Home.css"
// import SearchIcon from '@mui/icons-material/Search';

function SearchIconDiv(){
    return(
        // <SearchIcon className="SearchIcon"/>
        <div></div>
    )
}
const SearchBar = () => {
    return(
        <div className="search-bar">
            <form className="search-bar-form">
                <button type="submit" className="search-bar-button">
                    <SearchIconDiv></SearchIconDiv>
                </button>
                <input className="search-bar-input" type="text" placeholder="Search Transactions"/>
            </form>
        </div>
    )
}
export default SearchBar;