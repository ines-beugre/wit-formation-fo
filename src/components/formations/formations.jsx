import React from 'react';
import GestionFormation from '../../services/gestionFormation';
import LigneFormation from '../formation/ligne-formation';
import { getFormations } from '../../redux/formations/dispath';
import IsPending from '../isPending/isPending';
import { connect } from 'react-redux';
import './formations.css';
import moment from "moment";
import 'moment/locale/fr';
import SeachBar from '../../pages/search-bar/search-bar';


class Formations extends React.Component {
    constructor(props) {
        super(props);
        this.filteredFormations = this.filteredFormations.bind(this);
        this.gestionsFormation = new GestionFormation();
        this.state = {
            filteredFormations: [],
            filtered: [],
            searchTerm: '',
            setSearchTerm: '',
        }
    }

    componentDidMount() {
        this.props.dispatch(getFormations());
    }

    filteredFormations() {
        const { formations } = this.props;
        let filteredFormations = formations;
        const today = moment(Date.now()).format('YYYY-MM-DD');
        filteredFormations = filteredFormations
                                .filter(formation => formation.date >= today)
                                .sort(function(a, b){
                                    return !a.name ? 1 : !b.name ? -1 : a.name.toString().localeCompare(b.name);
                                })        
        return filteredFormations;
    }

    // handleSearch = (event) => {
    //     const props = this.props;
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    //     props.dispatch(actions.setFilters({...props.filters, [name]: value}));
    // }

    handleResults = (e) => {
        const filteredFormations = this.filteredFormations();       
        const results = !e
            ? filteredFormations
            : filteredFormations.filter(filteredFormation => 
                filteredFormation.name.toLowerCase().includes(e.toLocaleLowerCase()))
        return results;
    } 

    render () {
        const { isPending } = this.props;
        const e = this.state.searchTerm;
        const filteredFormations = this.filteredFormations();
        const results = this.handleResults(e);

        return (
            <div className="formations">
                <h1>Liste de formations à venir</h1>

                
                    <div className="seach-bar">
                        <SeachBar 
                            filteredFormations = {filteredFormations} 
                            handleResults = {this.handleResults}
                            />

                        {/* <div className="div-search">
                            <input
                                id="input-search"
                                className="input-search" type="text"
                                placeholder="Nom, thème, formateur"
                                name="search"
                                value={filters.search}
                                onChange={this.handleSearch}
                            />
                        </div> */}
                </div>

                <div className="liste-formations">
                    {
                        isPending ?
                            <IsPending className="formations-pending"/> :
                        results && results.length ?
                        results.map((formation) => <LigneFormation key = { formation.id }
                                                                                        formation = { formation } />)
                                :
                                <span>Aucun résultat</span>
                         
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       formations: state.formationsReducer.formations,
       isPending: state.formationsReducer.isPending,
       filters: state.filtersReducer.filters
    }
}

export default connect(mapStateToProps)(Formations);
