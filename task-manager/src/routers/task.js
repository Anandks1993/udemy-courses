const express = require('express');
const router = express.Router();

// Load Task Model
const Task = require('../models/task');

// Load auth middleware
const auth = require('../middleware/auth');

// Task Creation --> Old router when no relationship is used.
// router.post('/tasks', async (req, res) => {
//     const task = new Task(req.body);

//     try {
//         await task.save();
//         res.status(201).send(task);
//     } catch (e) {
//         res.status(400).send(error);
//     }

//     // task.save().then(() => {
//     //     res.status(201).send(task);
//     // }).catch(error => {
//     //     res.status(400).send(error);
//     // });
// });

// Create task for logged in user
router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    });

    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);

    }
});

// Get all tasks
router.get('/tasks', auth, async (req, res) => {

    try {
        // 1st method
        // const tasks = await Task.find({ owner: req.user._id });
        // res.send(tasks);

        // 2nd method
        await req.user.populate('tasks');
        res.send(req.user.tasks);
    } catch (e) {
        res.status(500).send();
    }

    // Task.find({}).then(tasks => {
    //     res.send(tasks);
    // }).catch(error => {
    //     res.status(500).send();
    // })
});

// Get task by id
router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;

    try {
        // const task = await Task.findById(_id);
        const task = await Task.findOne({ _id, owner: req.user._id });
        
        if (!task) {
            return res.status(404).send();
        }

        res.send(task);
    } catch (e) {
        res.status(500).send();
    }

    // Task.findById(_id).then(task => {
    //     if (!task) {
    //         return res.status(404).send();
    //     }

    //     res.send(task);
    // }).catch(error => {
    //     res.status(500).send();
    // });
});

// Update task
router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const updatesAllowed = ['description', 'completed'];
    const isValidOperation = updates.every(update => updatesAllowed.includes(update));

    if (!isValidOperation) {
        res.status(400).send({
            error: 'Invalid updates!'
        })
    }

    try {
        // const task = await Task.findById(req.params.id);
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });

        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!task) {
            res.status(404).send();
        }

        updates.forEach(update => task[update] = req.body[update]);
        await task.save();

        res.send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Delete Task
router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        // const task = await Task.findByIdAndDelete(req.params.id);
        const task = await Task.findByIdAndDelete({ _id: req.params.id, owner: req.user._id });

        if (!task) {
            return res.status(404).send();
        }

        res.send(task);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;