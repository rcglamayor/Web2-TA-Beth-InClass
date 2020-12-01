const express = require('express');
const router = express.Router();

/* Response Handler ---------------------------*/
const responseHandler = require('../common/responseHandler.js');

/* DB Models ---------------------------*/
const BidSubmissionModel = require('./BidSubmissionModel.js');

/*---------------------------
| BidSubmission: Get Bid Submissions
---------------------------*/
router.get('/getBids', (req,res) => {
    
    const session = req.session;
    const isLoggedIn = session.isLoggedIn;
    const user = session.user;

    const RH = responseHandler({
        title: 'Bid Submission: Get Bids',
        payloadKey: "bidSubmissions",
        routerResp: res,
    });

    if (isLoggedIn) {
        /* Update or Instert a Bid Submission ---------------------------*/
        BidSubmissionModel
            .find({ userID: user._id })
            .then(RH.dbResp)
            .catch(RH.dbError);
            
    } else {
        RH.manualResp(false, 'User must be logged to retrieve Bid Submissions.');
    }
});

/*---------------------------
| BidSubmission: Add Lot
---------------------------*/
router.post('/addLot', (req,res) => {
    
    const session = req.session;
    const isLoggedIn = session.isLoggedIn;
    const user = session.user;
    const {
        lot,
    } = req.body;

    const RH = responseHandler({
        title: 'Bid Submission: Add Lot', 
        payloadKey: "bidSubmission", 
        routerResp: res,
    });

    if (isLoggedIn && lot) {
        /* Update or Instert a Bid Submission ---------------------------*/
        BidSubmissionModel
            .findOne({ userID: user._id,  status: 'draft' })
            .then((existingBidSubmission) => {
                if (existingBidSubmission) {
                    const hasThisBid = existingBidSubmission.bids.find((bid) => bid.lot.id === lot.id);

                    if (!hasThisBid) {
                        existingBidSubmission.bids.push({
                            lot: lot,
                            cap: 0,
                        });
                        existingBidSubmission
                            .save()
                            .then(RH.dbResp)
                            .catch(RH.dbError);
                    } else {
                        console.log('Lot already exists in Bids.');
                        RH.manualResp(false, 'Lot already exists in Bids.');
                    }
                } else {
                    BidSubmissionModel.create({
                        userID: user._id,
                        bids: [{
                            lot: lot,
                            cap: 0,
                        }],
                    })
                    .then(RH.dbResp)
                    .catch(RH.dbError);
                }

            })
            .catch(RH.dbError);
            
    } else {
        RH.manualResp(false, 'User must be logged in and a posted Lot is required to bid on lots');
    }
});

/*---------------------------
| BidSubmission: Remove Lot
---------------------------*/
router.post('/removeLot', (req,res) => {
    
    const session = req.session;
    const isLoggedIn = session.isLoggedIn;
    const user = session.user;
    const {
        lot,
    } = req.body;

    const RH = responseHandler({
        title: 'Bid Submission: Remove Lot',
        payloadKey: "bidSubmission", 
        routerResp: res,
    });

    if (isLoggedIn && lot) {
        /* Update or Instert a Bid Submission ---------------------------*/
        BidSubmissionModel
            .findOne({ userID: user._id,  status: 'draft' })
            .then((existingBidSubmission) => {
                if (existingBidSubmission) {
                    existingBidSubmission.bids = existingBidSubmission.bids.filter((bid) => bid.lot.id !== lot.id);
                    existingBidSubmission
                        .save()
                        .then(RH.dbResp)
                        .catch(RH.dbError);
                } else {
                    RH.manualResp(false, 'User does not have an existing BidSubmission in draft mode to remove a lot.');
                }

            })
            .catch(RH.dbError);
            
    } else {
        RH.manualResp(false, 'User must be logged and a posted Lot is required to bid on lots');
    }
});

/*---------------------------
| BidSubmission: Submit Bids
---------------------------*/
router.post('/submitBids', (req,res) => {
    
    const session = req.session;
    const isLoggedIn = session.isLoggedIn;
    const user = session.user;

    const RH = responseHandler({
        title: 'Bid Submission: Submit Bids',
        payloadKey: "bidSubmission", 
        routerResp: res,
    });

    if (isLoggedIn) {
        /* Update or Instert a Bid Submission ---------------------------*/
        BidSubmissionModel
            .findOne({ userID: user._id,  status: 'draft' })
            .then((existingBidSubmission) => {
                if (existingBidSubmission) {
                    existingBidSubmission.status = 'submitted';
                    existingBidSubmission
                        .save()
                        .then(RH.dbResp)
                        .catch(RH.dbError);
                } else {
                    RH.manualResp(false, 'User does not have an existing BidSubmission in draft mode to submit bids.');
                }
            })
            .catch(RH.dbError);
            
    } else {
        RH.manualResp(false, 'User must be logged to submit bids.');
    }
});

module.exports = router;