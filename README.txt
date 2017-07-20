**** MY NOTES ****

*Base Proj Cloned From: ReduxSimpleStarter by Stephen Grider

---- MOST BASIC STARTUP FROM BASE PROJ ----

npm install - installs dependencies from package.json provided

npm start - starts server
localhost:8080

---- COMPONENTS ----

import necessary files to index.js
    -> e.g.
    import React from 'react';
    import ReactDOM from 'react-dom';
    
    import SearchBar from './components/search_bar';
    
    //SearchBar is a random file with code for a  search bar

!!DONT FORGET TO EXPORT!!
    -> In search_bar.js add
    export default SearchBar;
    
    //this is the name of the component in search_bar.js

create components in index.js

components - js functions or alternatively classes (ES6) that produce HTML
    -> use JSX (looks like html)
    -> e.g.
    const App = () => {
    return (
            <div>
                Search here: 
                <SearchBar />
            </div>
            );
        }

once components are created, they must be used to generate HTML and show it on the DOM
    -> e.g.   
    ReactDOM.render(<App />, document.querySelector('.container'));
    
    -> need <App /> to use it - to create a component instance - can also be <App></App>
    
    -> root node:  document.querySelector('.container') is the location the component is rendered to
    
---- CLASS-BASED COMPONENT ----

They are more capable than function-based components.

Must have a defined render() method

If class extends another class, must call super to use the code from the parent method

EXAMPLE: (note: the 'component' piece is really React.Component - the version below is ES6 syntax)


import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {term: ''};
    }
    
    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

---- YOUTUBE API ----

get key for api
declare 'API_KEY' variable for easy use

npm install --save youtube-api-search
    -> this will access the api search functionality
    
    
    
    