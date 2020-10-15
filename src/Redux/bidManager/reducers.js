import { ActionTypes } from './actionTypes';

const defaultState = {
    bids: [],
}

const bidManagerReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.BM_BIDS_UPDATE:
            return {
                ...state,
                bids: action.bids,
            }
            default:
                return state;
    }
}

export default bidManagerReducer;