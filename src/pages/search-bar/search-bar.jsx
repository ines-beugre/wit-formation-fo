import React, { useState } from 'react';

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    
    const handleChange = event => {
        setSearchTerm(event.target.value);
        props.handleResults(event.target.value)
    };

    return (
        
        <div className= "search-bar">

            <div className="div-search">
                <input
                    id="input-search"
                    className="input-search" type="text"
                    placeholder="Nom, thème, formateur"
                    name="search"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>
        </div>
        );
}

export default SearchBar;