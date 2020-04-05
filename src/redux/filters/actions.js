import types from './types';

const setFilters = (filters) =>
    ({
        type: types.SET_FILTERS,
        filters
    });

export default {
    setFilters
}
