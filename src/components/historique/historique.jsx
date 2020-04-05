import React, { Component } from 'react';
import { getFormations } from '../../redux/formations/dispath';
import LigneFormation from '../formation/ligne-formation';
import IsPending from '../isPending/isPending';

import { connect } from 'react-redux';
// import '../formation.css';
import '../formations/formations.css';
import moment from "moment";
import 'moment/locale/fr';

class Historique extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredFormations: [],
        }
    }

    componentDidMount() {
        this.props.dispatch(getFormations());
    }

    filtersPast = () => {
        const {formations} = this.props;
        const today = moment(Date.now()).format('YYYY-MM-DD');

        let filtered = formations
            .filter(formation => formation.date < today)
            .sort(function (a, b) {
                return !a.name ? 1 : !b.name ? -1 : a.name.toString().localeCompare(b.name);
            })
        return filtered;
    }

    render() {
        const {isPending} = this.props;
        const pastFormations = this.filtersPast();

        return (
            <div className="formations">
                
                <h1>Liste de formations passées</h1>

                <div className="liste-formations">

                    {
                        isPending ?
                            <IsPending className="formations-pending"/> :
                            pastFormations ?
                                pastFormations.map((formation) => <LigneFormation key={formation.id} formation={formation} />)
                                :
                                <span>Aucune résultat!</span>
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
    }
}

export default connect(mapStateToProps)(Historique);
