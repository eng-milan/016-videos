import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { term: "" }
    }

    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return <div className="search-bar">
            <form onSubmit={this.onFormSubmit}>
                <label>Video Search: </label>
                <input onChange={this.onInputChange} value={this.state.value} type="text" />
            </form>
        </div >
    }
}

export default SearchBar;