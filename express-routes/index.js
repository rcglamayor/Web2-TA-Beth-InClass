const auctions = require('./auctions/auctions.js');
const users = require('./users/users.js');
const bidSubmission = require('./bidSubmission/bidSubmission.js');

const routes = {
    auctions: auctions,
    users: users,
    bidSubmission: bidSubmission,
}

module.exports = routes;