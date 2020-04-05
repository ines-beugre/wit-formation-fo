import React, { useState } from 'react';

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    // const [searchResults, setSearchResults] = useState([]);
    // const {filteredFormations} = props;

    const handleChange = event => {
        // console.log('e', event.target.value)
        setSearchTerm(event.target.value);
        // console.log('searchteam', searchTerm)
        // this.setState({filteredFormations: results})
        props.handleResults(searchTerm)
    };

    // const results = !searchTerm 
    //         ? filteredFormations
    //         : filteredFormations.filter(filteredFormation => 
    //             filteredFormation.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
    
    // console.log('result', results)
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

                {/* <div>
                    {
                        results.map(item => 
                        <span key={item.id}>{item.name}</span>
                        )
                    }
                </div> */}
            </div>
        </div>
        );
}

export default SearchBar;