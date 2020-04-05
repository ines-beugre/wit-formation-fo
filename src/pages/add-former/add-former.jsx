import React, {Component} from 'react';
import './add-former.css';

export class AddFormer extends Component {

    changeInputFormer = (e) => {
        let { former } = this.props
        former[e.currentTarget.name] = e.currentTarget.value;
        this.props.changeInputAddFormer(former, this.props.index);
    }
    
    render() {
        const { former } = this.props;
        console.log('former', former);

        return (
            <div className="add-former">
                <div className="add-former-label">
                    <label>Formateur(s): </label>

                </div>

                <div className="add-formation-former"> 

                    <div className="add-formation-former-lastname">
                        <label htmlFor="lastname">Nom: </label>
                        <input
                            className="former-lastname"
                            name="lastname"
                            type="text"
                            value={former.lastname}
                            onChange={this.changeInputFormer}
                        />
                    </div>
                    
                    <div className="add-formation-former-firstname">
                        <label htmlFor="firstname">Prénom: </label>
                        <input
                            className="former-firstname"
                            name="firstname"
                            type="text"
                            value={former.firstname}
                            onChange={this.changeInputFormer}
                        />
                    </div>

                    <div className="add-formation-former-job">
                        <label htmlFor='job'>Profession: </label>
                        <input
                            className="former-job"
                            name="job"
                            type="text"
                            value={former.job}
                            onChange={this.changeInputFormer}
                        />
                    </div>
                    </div>

            </div>
        )
    }
}

