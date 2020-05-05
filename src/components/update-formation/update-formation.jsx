import React, { Component } from 'react';
import IsPending from '../isPending/isPending';
import { connect } from 'react-redux';
import { getFormation } from '../../redux/formations/dispath';
import './update-formation.css';
import GestionFormation from '../../services/gestionFormation';

const getService = new GestionFormation();

class UpdateFormation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formationToUpdate: {...this.props.formation}
        }
    }

    componentDidMount () {
        this.props.dispatch(getFormation(this.props.match.params.id));
    }

    update = () => {
        const { formation, dispatch } = this.props;
        console.log('hello');
        getService.update(formation);
        // dispatch(updateFormation(formation))
        //     .then((result) => {
        //         if (result.status === 200) {
        //             console.log('bien joué')
        //         }
        //     })
           
    }

    changeHandler = (e) => {
        let formation = this.props.formation;
        formation[e.currentTarget.name] = e.currentTarget.value;
        this.setState({formation: formation});
    }

    OnSubmitHandler = (e) => {
        e.preventDefault();
        console.log("update")
        this.update();
    } 

    render() {
        const { isPending, formation } = this.props;

        return (
            <div className = "formation-container">
                {
                    isPending ?
                        <IsPending className="formations-pending"/>
                        :
                        <form onSubmit={this.OnSubmitHandler.bind(this)}>
                            <div className="add-formation">

                                <h3>Mettre à jour une formation</h3>

                                <div className="div-info-formation">
                                        <label htmlFor="name">Nom de la formation: </label>
                                        <input
                                            id="name"
                                            className="input-name"
                                            name="name"
                                            type="text"
                                            value={formation.name}
                                            onChange={this.changeHandler}
                                            required
                                        />
                                </div>

                                <div className="div-info-date">

                                    <div className="div-info-formation">
                                        <label htmlFor="date">Date de la formation:
                                        </label>
                                        <input
                                            id="date"
                                            className="input-date"
                                            name="date"
                                            type="date"
                                            value={formation.date}
                                            onChange={this.changeHandler}
                                            // required
                                        />
                                    </div>

                                    <div className="div-info-formation">
                                        <label htmlFor="deadline">Date limite:</label>
                                        <input
                                            id="deadline"
                                            className="input-date"
                                            name="deadline"
                                            type="date"
                                            value={formation.deadline}
                                            onChange={this.changeHandler}
                                        />
                                    </div>

                                </div>

                                <div className="div-info-formation image">
                                    <img
                                        className="add-formation-image"
                                        src={formation.image}
                                        alt="formation"
                                    />
                                    <input
                                        className="add-formation-image"
                                        type="file"
                                        onChange={this.getImage}
                                        accept="image/*"
                                    />
                                </div>
                                
                                <div className="add-formation-theme">
                                    <label htmlFor="theme">Thème: </label>
                                    <input
                                        id="theme"
                                        className="input-theme"
                                        name="theme"
                                        type="text"
                                        value={formation.theme}
                                        onChange={this.changeHandler}
                                        // required
                                    />
                                </div>

                                <div className="add-formation-target">
                                    <label htmlFor="target">Public cible: </label>
                                    <input
                                        id="target"
                                        className="input-target"
                                        name="target"
                                        type="text"
                                        value={formation.target}
                                        onChange={this.changeHandler}
                                        // required
                                    />
                                </div>

                                <div className="add-formation-place">
                                    <label htmlFor="place">Lieu de la formation: </label>
                                    <input
                                        id="place"
                                        name="place"
                                        className="input-place"
                                        type="text"
                                        value={formation.place}
                                        onChange={this.changeHandler}
                                        // required
                                    />
                                </div>

                                <div className="add-formation-description">
                                    <label htmlFor="description">Description: </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        className="input-description"
                                        value={formation.description}
                                        onChange={this.changeHandler}
                                    >
                                    </textarea>
                                </div>

                                {/* add-former */}

                                {/* add-module */}

                                <div className="add-formation-footer">
                                    <div className="add-formation-price">
                                        <label htmlFor="price">Entrée</label>
                                        <input
                                            id="price"
                                            className="add-formation-price"
                                            name="price"
                                            type="number"
                                            value={formation.price}
                                            onChange={this.changeHandler}
                                            // required
                                        />
                                    </div>

                                    <div className="add-formation-phone">
                                        <label htmlFor="phone">Contacts:</label>
                                        <input
                                            id="phone"
                                            className="add-formation-phone"
                                            name="phone"
                                            type="tel"
                                            // pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                                            value={formation.phone}
                                            onChange={this.changeHandler}
                                            // required
                                        />
                                    </div>

                                    <div className="add-formation-email">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            id="phone"
                                            className="add-formation-email"
                                            name="email"
                                            type="email"
                                            value={formation.email}
                                            onChange={this.changeHandler}
                                            // required
                                        />
                                    </div>

                                </div>

                                <div className="add-formation-button">
                                    <button type="submit" className="btn btn-valider">
                                        Valider
                                    </button>    
                                </div>

                            </div>
                        </form>
                }
               
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
export default connect(mapStateToProps)(UpdateFormation);

// export default AddFormation