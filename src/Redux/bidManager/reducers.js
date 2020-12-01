import { ActionTypes } from './actionTypes';

const defaultState = {
    current: {},
    past: [],
}

const bidManagerReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.BM_CURRENT_UPDATE:
            return {
                ...state,
                current: action.current,
            }
        case ActionTypes.BM_PAST_UPDATE:
            return {
                ...state,
                past: action.past,
            }
            default:
                return state;
    }
}

export default bidManagerReducer;