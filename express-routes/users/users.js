const express = require('express');
const router = express.Router();

/* Response Handler ---------------------------*/
const responseHandler = require('../common/responseHandler.js');

/* Db Models ---------------------------*/
const UserModel = require('./UserModel.js');

router.post('/login', (req,res) => { 

    const {
        email,
        password
    } = req.body;
    
    const RH = responseHandler({
        title: 'User: Login',
        payloadKey: 'user',
        routerResp: res,
    });

    UserModel
        .findOne({ 
            email: email,
            password: password,
        })
        .then(RH.dbResp)
        .catch(RH.dbError);
});

module.exports = router;