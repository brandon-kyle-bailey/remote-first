import React, {useState, useContext} from 'react';
import SearchBar from "material-ui-search-bar";

import { GlobalContext } from '../../context/global-state.context';

import useStyles from './searchbar.styles';


function JobSearchBar() {
    const styles = useStyles();
    const [searchTerm, setSearchTerm] = useState("");
    
    const {searchJobs} = useContext(GlobalContext);

    const doJobSearch = () => {
        searchJobs(searchTerm);
    }

    return(
        <SearchBar 
            className={styles.searchBar} 
            value={searchTerm}
            onChange={(newValue) => setSearchTerm(newValue)}
            onRequestSearch={doJobSearch}/>
    );
}

export default JobSearchBar;