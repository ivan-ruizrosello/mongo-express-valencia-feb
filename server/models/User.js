const mongoose = require('mongoose');
const { pick } = require('lodash');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
        // _id, 
        name: {
            type: String,
            required: true,
            maxlength: 50
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        tokens: [{
            token: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            }
        }]
    }
);

UserSchema.methods.toJSON = function () {
    const user = this;

    return pick(user, ['_id', 'name', 'email']);
}

UserSchema.methods.generateAuthToken = function () {
    const user = this;

    const payload = {
        _id: user._id,
        iat: Date.now() / 1000,
        exp: Date.now() / 1000 + 60 * 60 // 1h
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    
    user.tokens.push({
        token,
        type: 'auth'
    });

    return user.save().then((user) => {
        return token;
    });
}

UserSchema.statics.findByCredentials = ({ email, password }) => {
    // email, password
    console.log(email, password);

    return User.findOne({
        email, password
    })
}

const User = mongoose.model('user', UserSchema);

module.exports = User;