const express = require('express');
const router = express.Router();

// Load User Model
const User = require('../models/user');

// User creation
router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }

    // user.save().then(() => {
    //     res.status(201).send(user);
    // }).catch(error => {
    //     res.status(400).send(error);
    // });
});

// Login user
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        res.send(user);
    } catch (e) {
        res.status(400).send();
    }
});

// Get all users
router.get('/users', async (req, res) => {

    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(500).send();
    }

    // User.find({}).then(users => {
    //     res.send(users);
    // }).catch(error => {
    //     res.status(500).send();
    // });
});

// Get user by id
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);
        
        if (!user) {
            return res.status(404).send();
        }

        return res.send(user);
    } catch (e) {
        res.status(500).send();
    }

    // User.findById(_id).then(user => {
    //     if (!user) {
    //         return res.status(404).send();
    //     }
        
    //     res.send(user);
    // }).catch(error => {
    //     res.status(500).send();
    // })
});

// Update user
router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'age', 'email', 'password'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const user = await User.findById(req.params.id);

        updates.forEach((update) => user[update] = req.body[update]);
        await user.save();

        // This below line is commented out and replaced by the above to make mongoose middleware run before
        // saving into the database.
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!user) {
            res.status(404).send();
        }

        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Delete User
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        
        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;