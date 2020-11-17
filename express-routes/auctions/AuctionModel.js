const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Schema-less ---------------------------*/
const AuctionSchema = new Schema({}, { strict: false });
const AuctionModel = mongoose.model('Auction', AuctionSchema);

module.exports = AuctionModel;