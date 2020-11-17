const auctions = require('./auctions/auctions.js');
const users = require('./users/users.js');

const routes = {
    auctions: auctions,
    users: users,
}

module.exports = routes;