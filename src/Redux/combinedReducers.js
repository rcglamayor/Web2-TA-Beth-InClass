import { combineReducers } from 'redux';

import auctionReducer from './auction/reducers.js';
import bidManagerReducer from './bidManager/reducers.js';

const combinedReducers = combineReducers({
    auction: auctionReducer,
    bidManager: bidManagerReducer,
});

export default combinedReducers;