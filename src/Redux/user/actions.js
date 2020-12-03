import { ActionTypes } from './actionTypes';
import API from 'common/API.js';
import * as BidManagerActions from '../bidManager/actions.js';

/*===================================
|| 
|| Action Creators
|| Returns an Object that provides 
    1. action type
    2. Data to update in store.
|| 
===================================*/
export const userAuthUpdate = (isLoggedIn, profile) => {
    return {
        type: ActionTypes.USER_AUTH_UPDATE,
        isLoggedIn: isLoggedIn,
        profile: profile,
    }
}

/*---------------------------
| Action Dispatchers
---------------------------*/
/* Put user in Logged in state, if sessions exists ---------------------------*/
export const loadUser = () => {
    return (dispatch, getState) => {
        API.get('/users/isLoggedIn').then((apiResponse) => {

            console.log('apiResponse', apiResponse);

            const isLoggedIn = apiResponse.data.success;
            const profile = apiResponse.data.payload.user;

            dispatch(userAuthUpdate(isLoggedIn, profile));
            dispatch(BidManagerActions.loadUserBids());

        });
    }
}

/* Log User Out ---------------------------*/
export const logOut = () => {
    return (dispatch, getState) => {
        API.get('/users/logout').then((apiResponse) => {

            console.log('apiResponse', apiResponse);

            const isLoggedIn = false;
            const profile = {};

            dispatch(userAuthUpdate(isLoggedIn, profile));
        });
    }
}
