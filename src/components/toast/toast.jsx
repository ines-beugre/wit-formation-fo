import React from 'react';
import "./toast.css";

const Toast = ({type, message, timeout, dispatch, closeCallback}) => {
    let icon = "fas";
    let typeMessage = "";

    const onClose = () => {
        closeCallback && closeCallback();

    }
    
    let animationStyle;
    if (timeout > 0) {
        setTimeout(onClose, timeout);
        animationStyle = {
            animation: `toaster ${timeout}ms ease-out 0.3s`
        }
    } else {
        animationStyle = {
            animation: `show-toast 1000ms ease-out`
        }
    }

    return (
        <div className="toast" style={animationStyle}>
            <div>
                <h4>{typeMessage}</h4>
                <span>{message}</span>
            </div>
            <div>
                {
                    icon && 
                        (<i className="fas fa-times toast-icon"  onClick={onClose}/>)
                }
            </div>
        </div>
    )
}

export default Toast;