import React, { Component} from 'react';
import TimeField from "react-simple-timefield";
import "./add-module.css";

const defaultModule = {
    name: "",
    startTime: "12:12",
    endTime: "",
    description: "",
}

export class AddModule extends Component {

    constructor(...args) {
        super(...args);

        this.state = {
            module: defaultModule,
            startTime: '12:34',
            endTime: '12:00',
        };
        this.onTimeChange = this.onTimeChange.bind(this);
    }

    changeInputModule = (e) => {
        let { module } = this.props;
        module[e.currentTarget.name] = e.currentTarget.value;
        this.props.changeInputAddModule(module, this.props.index);
    }

    handleChangehour = (field, e) => {
        let { module } = this.props;
        let hour = module.startTime;
        this.setState({ [field]: e.target.value })

    }

    onTimeChange(time) {
        let start = this.state.startTime;
        let end = this.state.endTime
        this.setState({time});
    }

    render(){
        const { module } = this.props;
        const {startTime, endTime} = this.state;
        console.log('module', module);

        return(
            <div className="add-module">
                
                <div className="add-module-label">
                    <label>Module(s):</label>
                </div>

                <div className="add-module-details">
                    
                    <div className="add-formation-module-nom">
                        <label>Nom du module: </label>
                        <input
                            className="module-name"
                            name="name"
                            type="text"
                            value={module.name}
                            onChange={this.changeInputModule}
                        />
                    </div>

                    <div className="add-formation-module-start">
                        <label>Heure de début: </label>

                        <TimeField name="startTime" value={module.startTime} onChange={this.changeInputModule} 
                            style={{
                                fontSize: '1.0em',
                                width: 62,
                                padding: '5px 8px',
                            }}
                        />
                    </div>
                
                    <div className="add-formation-module-end">
                        <label>Heure de fin: </label>

                        <TimeField name="endTime"  value={module.endTime} onChange={this.changeInputModule} 
                            style={{
                                fontSize: '1.0em',
                                width: 62,
                                padding: '5px 8px',
                            }}
                        />
                    </div>
                
                    <div className="add-formation-module">
                        <label>Description: </label>
                        <input
                            className="module-name"
                            name="description"
                            type="text"
                            value={module.description}
                            onChange={this.changeInputModule}
                        />
                    </div>

                </div>

            </div>

        )
    }
}


{/* <div className="add-formation-module">
                    <label>Heure de début: </label>
                    <input
                        className="module-hour"
                        type="time"
                        name="start-time"
                        value={module.startTime}
                        onChange={e => this.handleChangehour('startTime', e)}
                    />
                </div>

               <div className="add-formation-module">
                    <label>Heure de début: </label>
                    <input
                        className="module-hour"
                        name="start-time"
                        type="time"
                        value={module.startTime}
                        onChange={this.changeInputModule}
                    />
                </div>

                <div className="add-formation-module">
                    <label>Heure de fin: </label>
                    <input
                        className="module-hour"
                        name="end-time"
                        type="time"
                        value={module.endTime}
                        onChange={this.changeInputModule}
                    />
                </div> */}

              