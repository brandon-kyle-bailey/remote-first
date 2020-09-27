import React, {useState} from 'react';
import SearchBar from "material-ui-search-bar";


function JobSearchBar(props) {
    const classes = props.classes;
    const [searchTerm, setSearchTerm] = useState("");

    const performJobSearch = (input) => {
        alert(`Performing search for: ${input}`);
    }

    return(
        <SearchBar 
            className={classes.searchBar} 
            value={searchTerm}
            onChange={(newValue) => setSearchTerm(newValue)}
            onRequestSearch={() => performJobSearch(searchTerm)}/>
    );
}

export default JobSearchBar;