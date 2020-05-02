import React from 'react';
import './isPending.css';
import '@fortawesome/fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faSpinner);

const IsPending = ({className}) => {
    className = "is-pending " +(className || "is-pending")
    return (
        <div className={className}>

            {/* <span className="fas fa-spin fa-spinner fa-3x"/> */}

            <FontAwesomeIcon 
                className="fa-spinner"
                icon="spinner" 
                size="3x" 
                spin 
            />

        </div>
    )
};

export default IsPending;