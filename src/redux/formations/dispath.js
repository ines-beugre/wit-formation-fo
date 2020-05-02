import GestionFormation from '../../services/gestionFormation';
import actions from './actions';

const gestionFormation = new GestionFormation();

export const getFormations = () => {

    return (dispatch) => {
        dispatch(actions.showPending(true));
        gestionFormation.list()
            .then(formations => {
                dispatch(actions.showFormations(formations));
                dispatch(actions.showPending(false));
                return Promise.resolve();
            })
            .catch((err) => {
                console.log(err);
                dispatch(actions.showPending(false));
                return Promise.reject(err);
            })
    }
}

export const getFormation = (id) => {

    return (dispatch) => {
        dispatch(actions.showPending(true));
        gestionFormation.getById(id)
            .then(formation => {
                dispatch(actions.showFormation(formation));
                dispatch(actions.showPending(false));
                return Promise.resolve();
            })
            .catch((err) => {
                console.log(err);
                dispatch(actions.showPending(false));
                return Promise.reject(err);
            })        
    }
}

export const addFormation = (formation) => {

    return (dispatch) => {
        dispatch(actions.showPending(true));
        return gestionFormation.add(formation)
            .then(formation => {
                dispatch(actions.showFormation(formation));
                dispatch(actions.showPending(false));
                return Promise.resolve();
            }) 
            .catch((err) => {
                console.log(err);
                dispatch(actions.showPending(false));
                return Promise.reject(err);
            })
    }
}

export const updateFormation = (formation) => {
    console.log('hello')
    return (dispatch) => {
        dispatch(actions.showPending(true));
        return gestionFormation.update(formation)
            .then(formation =>  {
                dispatch(actions.showFormation(formation));
                dispatch(actions.showPending(false));
            })
                    
            
            //     {
            //     console.log('response', response)
            //     response.json()
            //         .then((formationToUpdate) => {
            //             dispatch(actions.showFormation(formationToUpdate));
            //             dispatch(actions.showPending(false));
            //         })
            //         return Promise.resolve(response);
            // }
            
            .catch((err) => {
                console.log(err);
                dispatch(actions.showPending(false));
                return Promise.reject(err);
            })
    }
}