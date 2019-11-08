import React from "react";

function SearchForm(props) {
    return (
        <div>
        <button type="submit" onClick={props.handleFormSubmit}>
            Search for books
        </button>
        </div>
    );
}

export default SearchForm;