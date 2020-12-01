const express = require('express');
const router = express.Router();

/* Response Handler ---------------------------*/
const responseHandler = require('../common/responseHandler.js');

/* DB Models ---------------------------*/
const UserModel = require('./UserModel.js');

/*---------------------------
| Login
---------------------------*/
router.post('/login', (req,res) => {

    /* Get Props ---------------------------*/
    const {
        email,
        password
    } = req.body;
    
    /* Repsonse Handler ---------------------------*/
    const RH = responseHandler({
        title: 'User: Login',
        payloadKey: "user",
        routerResp: res,
        onDbSuccess: (resp) => {
            const session = req.session;

            // Expiration
            const sessionExpiry = 30 * 24 * 60 * 60 * 1000; // 30 days...milliseconds
            session.cookie.maxAge = sessionExpiry;

            // This user should log in again after restarting the browser
            session.cookie.expires = false; // you could also set a time relative to Expiration

            // Custom Session Variables
            session.isLoggedIn = true;
            session.user = resp;
        }
    });

    /* Request Profile from DB ---------------------------*/
    UserModel
        .findOne({ 
            email: email,
            password: password,
        })
        .then(RH.dbResp)
        .catch(RH.dbError);
});

/*---------------------------
| Logout
---------------------------*/
router.get('/logout', (req,res) => {
    
    /* Repsonse Handler ---------------------------*/
    const RH = responseHandler({
        title: 'User: Logout',
        payloadKey: "user",
        routerResp: res,
    });

    /* Respond ---------------------------*/
    req.session.destroy((error) => {
        const message = !error ? 'User has been logged out successfully' : `There was an error in logging user out. ${error}`
        RH.manualResp(!error, message);
    });
});

/*---------------------------
| isLoggedIn
---------------------------*/
router.get('/isLoggedIn', (req,res) => {
    
    const isLoggedIn = !!req.session.isLoggedIn;

    /* Repsonse Handler ---------------------------*/
    const RH = responseHandler({
        title: 'User: Auth Check',
        payloadKey: "user",
        routerResp: res,
    });

    /* Respond ---------------------------*/
    const message =  !isLoggedIn ? 'Not logged in.' : 'User is logged in.';
    RH.manualResp(isLoggedIn, message, {
        user: isLoggedIn ? req.session.user : {}
    });
});

module.exports = router;