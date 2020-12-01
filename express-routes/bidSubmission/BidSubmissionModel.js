const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Create Schema ---------------------------*/
const BidSubmissionSchema = new Schema({
    userID: {
        type: String,
        required: [true, 'User ID is a required field.'],
        trim: true,
    },
    status: {
        type: String,
        enum : ['draft', 'submitted'],
        default: 'draft',
        required: [true, 'Status is a required field.'],
        trim: true,
    },
    bids: {
        type: Array,
    },
}, { 
    strict: true,
    collection: 'bid_submissions',
    timestamps: true,
});


const BidSubmissionModel = mongoose.model('BidSubmission', BidSubmissionSchema);
module.exports = BidSubmissionModel;