import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term)
    }
    return <div className="search-bar">
        <form onSubmit={onSubmit}>
            <label>Video Search: </label>
            <input
                onChange={(event) => { setTerm(event.target.value) }}
                value={term}
                type="text" />
        </form>
    </div >
}

export default SearchBar;