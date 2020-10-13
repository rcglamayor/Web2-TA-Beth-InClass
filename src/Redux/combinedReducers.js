import { combineReducers } from 'redux';
import auctionReducer from './auction/reducers.js';

const combinedReducers = combineReducers({
    auction: auctionReducer,
});

export default combinedReducers;