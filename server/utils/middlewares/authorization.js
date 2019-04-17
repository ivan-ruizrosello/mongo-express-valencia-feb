const jwt = require('jsonwebtoken');
const User = require('../../models/User');

const authorization = async (req, res, next) => {
    try {
        const  { _id } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);

        const user = await User.findOne({
            _id,
            tokens: {
                $elemMatch: {
                    type: 'auth',
                    token: req.headers.authorization
                }
            }
        });

        if(!user) throw new Error('Invalid User');

        req.user = user;

        next();
    } catch(err) {
        res.status(401).send(err.message);
    }
}

const isOwner = (req, res, next) => {
    if(req.params._id !== req.user._id.toHexString()) {
        return res.status(403).send('No estas autorizado a ver otros usuarios')
    }

    next();
}

module.exports = { 
    authorization,
    isOwner
};