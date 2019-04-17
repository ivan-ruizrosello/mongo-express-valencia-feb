const router = require('express').Router();

const User = require('../models/User');
const { authorization, isOwner } = require('../utils/middlewares/authorization')

router.get('/', (req, res) => {
    res.send(process.env.NODE_ENV)
});

/**
 * User Routers.
 */

router.post('/users', (req, res) => {
    
    new User(req.body)
    .save()
    .then(user => {
        res.send(user);
    })
    .catch(err => {
        res.status(400).send(err);
    });
});

router.post('/users/auth', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body);

        if(!user)
            return res.status(401).send('Wrong credentials');

        user.generateAuthToken().then(token => {
            res.header('authorization', token).send(user); 
        }).catch(err => res.status(500).send(err.message));
    } catch (err) {
        res.status(500).send(err);
    }

    // User.findByCredentials(req.body).then( user => {
    //     res.send(user);
    // }).catch(err =>  {
    //     res.status(401).send(err)
    // })
})

router.get('/users', authorization, (req, res) => {

    User.find({}).then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send(err);
    });
});

router.get('/users/:_id', authorization, isOwner, (req, res) => {


    User.findById(req.params._id).then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send(err);
    });
});

router.delete('/users/:user_id', (req, res) => {
    // User.findOneAndDelete({
    //     name: req.params.name
    // }).then(user => {
    //     res.send(user);
    // }).catch(err => {
    //     res.status(500).send(err);
    // });

    User.findByIdAndDelete(req.params.user_id).then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send(err);
    });
});


router.patch('/users/:user_id', (req, res) => {
    User.findByIdAndUpdate(
        req.params.user_id,
        {
            ...req.body
        },
        {
            new: true,
            runValidators: true
        }
    ).then(user => {
        res.send(user);
    }).catch(err => {
        res.status(400).send(err);
    })



    // User.findById(req.params.user_id).then(user => {
    //     console.log({...user});

        // user._doc = {
        //     ...user.toObject(),
        //     ...req.body
        // }

        // user.name = 'ivan'

        // user.save().then(updatedUser => {
        //     res.send(updatedUser);
        // }).catch(err => {
        //     res.status(400).send(err);
        // })
    // })
})


// @Todo
router.put('/users/:user_id', (req, res) => {
    User.findByIdAndUpdate(
        req.params.user_id,
        {
            $set: {
                ...req.body
            }
        },
        {
            new: true,
            runValidators: true,
            // overwrite: true
        }
    ).then(user => {
        res.send(user);
    }).catch(err => {
        res.status(400).send(err);
    })
})



module.exports = router;
