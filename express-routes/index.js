const auctions = require('./auctions/auctions.js');
const services = require('./services/services.js');
const slides = require('./slides/slides.js');
const email = require('./email/email.js');
const login = require('./login/login.js');

const routes = {
    auctions: auctions,
    services: services,
    slides: slides,
    email: email,
    login: login,
}

module.exports = routes;