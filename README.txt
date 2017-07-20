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
Classes also need a contstructor() method

super(): If class extends another class, must call super() method to use the code from the parent method

EXAMPLE: (note: the 'component' piece is really React.Component - the version below is ES6 syntax)


import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {term: ''};
        //doesn't have to be called 'term'
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

    
---- STATE ----

"It is a plain js obj that is used to record and react to user events."

"Each class-based component that is defined has its own state object.  Whenever a component's state is changed, the component immediately re-renders - and also forces all of its children to re-render as well."

"Functional components DO NOT HAVE STATE."

Only inside the constructor() can you use
    -> this.state = {term: ''};

Everywhere else, you have to use
    -> this.setState({term: somethingHere})
    
Can say {this.state.term} to reference it. But not to change it.

"When we want to update our component in some fashion, be thinking state."

---- STATE: CONTROLLED FORM ELEMENT ----

AKA Controlled Field Element

"An element whose value is set by the state rather than the other way around."

Input shouldn't tell state to change in this case. State should tell input to change.

To do this you add
    -> value={this.state.term}
    ...to the input element
    ...now its value changes only when the state changes
    
When user changes input
    -> onChange={event => this.setState({ term: event.target.value })}
    ...runs and changes the state
    ...this causes the input to update because the value of the input equals the state now (as seen above)
    
---- DOWNWARDS DATA FLOW ----

Only the most parent component should be responsible for fetching data.

In this case, index.js's App component.

---- YOUTUBE API ----

get key for api
declare 'API_KEY' variable for easy use

npm install --save youtube-api-search
    -> this will access the api search functionality

DONT FORGET TO...
import YTSearch from 'youtube-api-search';
    -> can call it what you want

---- ADDING CSS CLASSES IN JSX ----

instead of class="" use...
    -> className=""

---- PROPS ----

great lecture - better to watch again than summarize

---- REACT AND ARRAYS ----

React knows how to handle arrays.  If you nest an array inside a ul, it knows to create li tags for each one.

However, you need to assign each item in the array a "key" property with a unique id (else every time there is an update, the ENTIRE array will have to re-render).  Like so...


const VideoList = props => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
        //see the above key property
    });
    
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
            //this is the array we created above with map
        </ul>
    );
};


---- JAVASCRIPT VARIABLES INSIDE JSX ----

!!they must be reference by a pair of {}

EXAMPLE:

<img className="media-object" src={imageUrl} />

//The src={imageUrl} is referencing...

const imageUrl = video.snippet.thumbnails.default.url;

...this variable was created in the same component in video_list_item.js












    