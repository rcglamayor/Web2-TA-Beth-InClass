import { ActionTypes } from './actionTypes';

/*===================================
|| 
|| Action Creators
|| Returns an object that provides
||  1. action type
||  2. data to update in store.
|| 
===================================*/
export const userAuthUpdate = (isLoggedIn, profile) => {
    return {
        type: ActionTypes.USER_AUTH_UPDATE,
        isLoggedIn: isLoggedIn,
        profile: profile,
    }
}
