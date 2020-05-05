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
            searchTerm: '',
        }
    }

    componentDidMount() {
        this.props.dispatch(getFormations());
        
    }

    filteredFormations() {
        let formations  = [];
        formations = this.props.formations;

        let filteredFormations = formations;
        const today = moment(Date.now()).format('YYYY-MM-DD');
        filteredFormations = filteredFormations
                                .filter(formation => formation.date >= today)
                                .sort(function(a, b){
                                    return !a.name ? 1 : !b.name ? -1 : a.name.toString().localeCompare(b.name);
                                }) 
        return filteredFormations;
    }

    search = (e) => {
        const filteredFormations = this.filteredFormations();  
        const results = !e
            ? filteredFormations
            : filteredFormations.filter(filteredFormation => 
                filteredFormation.name.toLowerCase().includes(e.toLowerCase()));
                return results;
    }

    handleResults = (e) => {
        this.setState({searchTerm: e});
    } 


    render () {
        const { isPending } = this.props;
        const searchTerm = this.state.searchTerm;
        const results = this.search(searchTerm);

        return (
            <div className="formations">
                <h1>Liste de formations à venir</h1>
                
                <div className="seach-bar">
                    <SeachBar 
                        handleResults = {this.handleResults}
                    />
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
