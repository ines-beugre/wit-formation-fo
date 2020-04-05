import types from './types';

const intialState = {
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
    },
    formations: [],
    isPending: false
}

const formationsReducer = (state = intialState, action) => {

    switch(action.type) {
        case types.SHOW_FORMATIONS:
            return {
                ...state, // permet de créer une copie de l'objet par mésure de sécurité et modifie après la propriété
                formations: action.formations
            };

        case types.SHOW_FORMATION: 
            return {
                ...state,
                formation: action.formation
            }

        case types.SHOW_PENDING: {
            return {
                ...state,
                isPending: action.isPending
            }
        }
        default:
            return state
    }
}

export default formationsReducer