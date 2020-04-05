import types from './types';
/*
 * actions creators 
 */
const showFormations = (formations) => {
    return {
        type: types.SHOW_FORMATIONS,
        formations
    }
}

const showFormation = (formation) => {
    return {
        type: types.SHOW_FORMATION,
        formation
    }
}

const showPending = (isPending = false) => {
    return {
        type: types.SHOW_PENDING,
        isPending
    }
}

export default {
    showFormations,
    showFormation,
    showPending
}