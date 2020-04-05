import React from 'react';
import {Link} from 'react-router-dom';
import './ligne-formation.css';
import moment from 'moment';
import 'moment/locale/fr';

const LigneFormation = ({formation}) => {

    return (
            <div key={formation.id} className="ligne-formation">
                <Link to={`/formations/${formation.id}`}>

                    <div className="formations-image">
                        <img className="image" src={formation.image} alt="formation"/>
                    </div>

                    <div className="formations-content">
                        <div className="formations-name">{formation.name}</div>
                        <div className="formations-date">{moment(formation.date).format('DD-MM-YYYY')}</div>

                    </div>
                </Link>

            </div>
    )
};

export default LigneFormation;
