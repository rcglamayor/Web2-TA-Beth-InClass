const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Create Schema ---------------------------*/
const UserSchema = new Schema({
    first: {
        type: String,
        required: [true, 'First name is a required field.'],
        trim: true,
    },
    last: {
        type: String,
        required: [true, 'Last name is a required field.'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email name is a required field.'],
        trim: true,
        lowercase: true,
        unique: true, //not a validator, but helps Mongo see these values as unique
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email does not appear to be a valid email address.'],
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 50,
        required: [true, 'Password name is a required field.'],
    }
}, { strict: true });


const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;