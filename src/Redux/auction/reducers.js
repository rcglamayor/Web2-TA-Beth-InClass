import { ActionTypes } from './actionTypes.js';

const defaultState = {
    current: {},
}

const auctionReducer = (state = defaultState, action) => {

    switch(action.type) {
        case ActionTypes.BM_AUCTIONS_CURRENT_SET:
            return {
                ...state,
                current: action.current,
            };
        default:
            return state;
    }

}

export default auctionReducer;