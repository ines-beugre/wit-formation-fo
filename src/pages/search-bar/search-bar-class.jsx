import React, { Component } from 'react';

class SearchBarClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialFormations: [],
            formations: [],
        }
    }
    
    handleSearchInputChanges = (e) => {
        console.log(e.target.value)
        const {filteredFormations} = this.props; 
        // let formationsToDIsplay = this.state.initialFormations;
        let formationsToDIsplay = filteredFormations;


        console.log('fifo', filteredFormations);

        formationsToDIsplay = formationsToDIsplay && formationsToDIsplay.filter((formation) => {
            console.log('forrr', formation)
            return formation.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        });
        this.setState({formations: formationsToDIsplay});

    }
    
    render() {
        const {filteredFormations} = this.props;
        console.log('fifi', filteredFormations);
        return (

            <div className= "search-bar">    
                <div className="div-search">
                    <input
                        id="input-search"
                        className="input-search" type="text"
                        placeholder="Nom, thème, formateur"
                        name="search"
                        onChange={this.handleSearchInputChanges}
                    />
                </div>
            </div>
            )
    }
}

export default SearchBarClass;