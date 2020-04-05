import React from 'react';
import './isPending.css';

const IsPending = ({className}) => {
    className = "is-pending " +(className || "is-pending")
    return (
        <div className={className}>

            {/*<span className="fa fa-spinner fa-pulse fa-3x fa-fw"></span>*/}
            <span className="fas fa-spin fa-spinner fa-3x"/>

            {/*fa fa-spinner fa-pulse fa-3x fa-fw*/}
        </div>
    )

};

export default IsPending;