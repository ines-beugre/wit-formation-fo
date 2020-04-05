import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import './formation.css';
import orangeMoney from '../../images/orange-money.png';
import GestionFormation from '../../services/gestionFormation';
import IsPending from '../isPending/isPending';
import { connect } from 'react-redux';
import { getFormation } from '../../redux/formations/dispath';

//import wit from './images/wit.png';

class Formation extends Component {

    constructor(props) {
        super(props);
        this.gestionsFormation = new GestionFormation();

        this.state = {
            formation: {
                name: '',
                date: '',
                place: '',
                price: '',
                target: '',
                email: '',
                deadline: '',
                formers: [],
                suscribers: [],
                goals: '',
                description: '',
                modules: [],
                theme: '',
                phone: '',
                transfert: '',
                image: '',
                logo: '',
            }
        }
    }

    componentDidMount() {
        this.props.dispatch(getFormation(this.props.match.params.id));
    }


    render() {
        const { formation, isPending } = this.props;
        const modules = formation.modules;
        const formers = formation.formers;

        return (
            <div>
                <div className="formation-container">
                {
                    isPending ?
                        <IsPending className="formations-pending"/>
                        :
                        <div className="formation">
                            <div>

                                <div className="formation-theme-date">
                                    <div className="formation-name">{formation.name}</div>
                                    <div
                                        className="formation-date">{moment(formation.date).format('DD MMMM YYYY')} </div>
                                </div>

                                <img className="formation-image" src={formation.image} alt="formation"/>

                                <div className="formation-theme">
                                    <label>Thème:</label> <span>{formation.theme}</span>
                                </div>

                                <div className="formation-modules">

                                    {
                                        modules &&
                                        modules.map((module) => {

                                            let i = modules.indexOf(module);
                                            return (
                                                <div key={module.id} className="timeline">

                                                    {
                                                        (i % 2) === 0 ?
                                                            <div className="container right">
                                                                <div className="content">
                                                                    <div className="content-hour">
                                                                        <div className="content-start">
                                                                            {moment(module.startTime).format('LT')}
                                                                        </div>

                                                                        <div className="content-end">
                                                                            {moment(module.endTime).format('LT')}
                                                                        </div>
                                                                    </div>

                                                                    <div className="content-name">
                                                                        {module.name}
                                                                    </div>

                                                                </div>
                                                            </div> :

                                                            <div className="container left">
                                                                <div className="content">
                                                                    <div className="content-hour">
                                                                        <div className="content-start">
                                                                            {moment(module.startTime).format('LT')}
                                                                        </div>

                                                                        <div className="content-end">
                                                                            {moment(module.endTime).format('LT')}
                                                                        </div>
                                                                    </div>

                                                                    <div className="content-name">
                                                                        {module.name}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <div className="formation-formers-place">
                                    <label>Formateur(s): </label>
                                    {
                                        formers &&
                                        formers.map((former, id) => {
                                            return (
                                                <div key={id} className="formation-formers">
                                                  {former.firstname} {former.lastname}{", "}
                                                    {former.job}
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="formation-place">
                                        <div>
                                            <i className="fas fa-map-marker-alt"></i>
                                            {formation.place}
                                        </div>
                                    </div>

                                </div>

                                <div className="formation-goals-description">

                                    <div className="formation-goals">
                                        <label>Objectifs: </label>
                                        <span>{formation.goals}</span>
                                    </div>

                                    <div className="formation-description">
                                        <label>Description: </label>
                                        <span>{formation.goals}</span>
                                    </div>

                                </div>

                                <div className="formation-target-deadline">
                                    <div className="formation-target">
                                        <label>Public cible: </label>
                                        <span>{formation.target}</span>

                                    </div>

                                    <div className="formation-deadline">
                                        <label>Date limite d'inscription: </label>
                                        <span>{moment(formation.deadline).format('LL')}</span>
                                    </div>

                                </div>

                                <div className="formation-suscribers">
                                    <label>Personnes inscrites: </label>
                                    <div>
                                        {
                                            formation.suscribers &&
                                                formation.suscribers.map((suscriber) => {
                                                    return (
                                                        <div key = {suscriber.id} className="formation-suscriber">
                                                            {suscriber.firstname} {suscriber.lastname}
                                                        </div>
                                                    )
                                                })
                                        }
                                    </div>

                                </div>

                                <div className="formation-footer">
                                    <div className="formation-footer-content">

                                        <img className="formation-logo" src={formation.logo} alt="logo"/>

                                        <div className="formation-price">
                                            <label className="">Entrée </label>
                                            <div className="">{formation.price}</div>
                                        </div>

                                        <div className="formation-transfert">
                                            <img className="formation-logo" src={orangeMoney} alt="orange-money"/>
                                            <div className="formation-transfert-phone">{formation.transfertPhone}</div>
                                        </div>

                                        <div className="formation-phone-email">
                                            <div className="formation-phone">
                                                <label className="">Contact: </label>
                                                <div className="">{formation.phone}</div>
                                            </div>

                                            <div className="email">{formation.email}</div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formation: state.formationsReducer.formation,
        isPending: state.formationsReducer.isPending,
    }
}
export default connect(mapStateToProps)(Formation);