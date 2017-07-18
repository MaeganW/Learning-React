import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return <input onChange={this.onInputChange} />;
    }
    
    onInputChange(eventObj) {
        console.log(eventObj.target.value);
    }
}

export default SearchBar;