import React from 'react';
import "./toast.css";
import actions from "../../redux/toast/actions";

const Toast = ({type, message, timeout, dispatch, closeCallback}) => {

    let clazz = "toast";
    let icon = "fas";
    let typeMessage = "";

    switch (type) {
        case "success":
            typeMessage = "Succès !";
            clazz += " toast-success";
            icon += " fa-check-circle";
            break;
        case "error" :
            typeMessage = "Erreur !";
            clazz += " toast-error";
            icon += " fa-times-circle";
            break;
        default :
            break;
    }

    const onClose = () => {
        closeCallback && closeCallback();
        dispatch(actions.hideToast());
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
        (
            <div className={clazz} style={animationStyle}>
                <i className={`${icon} toast-btn-close`}/>
                <div className="message-toast">
                    <h4>{typeMessage}</h4>
                    <span>{message}</span>
                </div>
                {
                    icon &&
                    (<i className="fas fa-times toast-icon"  onClick={onClose}/>)
                }
            </div>
        )
    );

};
export default Toast;

