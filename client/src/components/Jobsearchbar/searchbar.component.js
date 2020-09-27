import React, {useState} from 'react';
import SearchBar from "material-ui-search-bar";

import useStyles from './searchbar.styles';


function JobSearchBar() {
    const styles = useStyles();
    const [searchTerm, setSearchTerm] = useState("");

    const performJobSearch = (input) => {
        alert(`Performing search for: ${input}`);
    }

    return(
        <SearchBar 
            className={styles.searchBar} 
            value={searchTerm}
            onChange={(newValue) => setSearchTerm(newValue)}
            onRequestSearch={() => performJobSearch(searchTerm)}/>
    );
}

export default JobSearchBar;