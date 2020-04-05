import React, { Component } from 'react';
import './add-formation.css';
import images from '../data-base-64';
import { connect } from 'react-redux';
import { addFormation } from '../../redux/formations/dispath';
import  GestionFormation from '../../services/gestionFormation';
import { AddFormer } from '../add-former/add-former';
import { AddModule } from '../add-module/add-module';

const defaultFormation = {
    name: "",
    date: "",
    image: images.image,
    theme: "",
    place: "",
    goals: "",
    description: "",
    target: "",
    deadline: "",
    logo: "",
    price: "",
    transfert: "",
    phone: "",
    email: "",
    modules: [
        {
            name: "",
            startTime: "",
            endTime: "",
            description: "",
        }
    ],
    formers: [
        {
            firstname: "",
            lastname: "",
            job: "",
            email: "",
            phone: "",
        }
    ],
}

const gestionFormation = new GestionFormation();

class AddFormation  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // formation: defaultFormation,
            formation: {...JSON.parse(JSON.stringify(defaultFormation))},

        }
    }

    changeHandler = (e) => {
        let formation = this.state.formation;
        formation[e.currentTarget.name] = e.currentTarget.value;
        this.setState({formation: formation});
        console.log("formation_set_state", this.state.formation);
    }

    getImage = (e) => {
        const files = e.currentTarget.files;
        const reader = new FileReader();
        let {formation} = this.state;

        reader.onload = (e) => {
            formation.image = e.target.result;
            this.setState({formation})
        };
        reader.readAsDataURL(files[0]);
    };

    submitHandler = async (e) => {
        e.preventDefault();
        console.log(this.state);
        this.addFormation();
    }
      
    addFormation = () => {
        const { formation } = this.state;
        console.log('form-to-add', formation);
        const { dispatch } = this.props;
        dispatch(addFormation(formation))
        console.log('add-formation');

    }

    changeInputAddFormer = (e, index) => {
        let formers =  this.state.formation.formers;
        if (formers[index]) {
            formers[index] = e;
            this.setState({...this.state, formation: {...this.state.formation, formers: formers}});
        }
    }
    
    changeInputAddModule = (e, index) => {
        let modules = this.state.formation.modules;
        if (modules[index]) {
           modules[index] = e;
           this.setState({...this.state, formation: {...this.state.formation, modules: modules}});
        }
        console.log(e);
    }

    handleSubmit(e) {
        e.preventDefault();
    }
    
    render() {
        const { formation } = this.state;

        return (
            <div className="formation-container">
                <form onSubmit={this.submitHandler.bind(this)}>
                    <div className="add-formation">
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

                        {
                             formation.formers && formation.formers.map((former, index) => {
                                return (
                                    <AddFormer
                                        key = { `former${index}` }
                                        former = { former }
                                        index = { index }
                                        changeInputAddFormer = { this.changeInputAddFormer }
                                    />
                                )
                            })
                        }

                        {
                            formation.modules && formation.modules.map((module, index) => {
                                return (
                                    <AddModule
                                        key = { `formers${index}` }
                                        module = { module }
                                        index = { index }
                                        changeInputAddModule = {this.changeInputAddModule}
                                    />
                                )
                            })
                        }

                        <div className="add-formation-footer">

                            {/* <div className="">
                                <img
                                    className="add-formation-logo"
                                    src={formation.logo}
                                />
                            </div> */}

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
                                    pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formations: state.formationsReducer.formations
    }
}
export default connect(mapStateToProps)(AddFormation);

// export default AddFormation