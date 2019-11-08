import React, {Component} from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";


class Search extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        API.searchBooks()
        .then(res => this.setState({ results: res.data.books}))
        .catch(err => console.log(err));
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.searchBooks(this.state.search)
        .then(res => this.setState({ results: res.data.books}))
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <SearchForm />
            </div>
        )
    }
}

export default Search;