import API from 'common/API.js';
import { ActionTypes } from './actionTypes.js';

/*---------------------------
| Action Creators
---------------------------*/
export const auctionsCurrentSet = (auction) => {
    return {
        type: ActionTypes.BM_AUCTIONS_CURRENT_SET,
        current: auction,
    }
}

/*---------------------------
| Action Dispatchers
---------------------------*/
export const loadAuctions = () => {
    return (dispatch, getState) => {
        API.get('/auctions/current')
            .then((apiResponse) => {
                dispatch(auctionsCurrentSet(apiResponse.data.payload.currentAuction))
            });
    }
}