const express = require('express');
const router = express.Router();

// Load Task Model
const Task = require('../models/task');

// Task Creation
router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(error);
    }

    // task.save().then(() => {
    //     res.status(201).send(task);
    // }).catch(error => {
    //     res.status(400).send(error);
    // });
});

// Get all tasks
router.get('/tasks', async (req, res) => {

    try {
        const tasks = await Task.find({});
        res.send(tasks);
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
router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);
        
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
router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const updatesAllowed = ['description', 'completed'];
    const isValidOperation = updates.every(update => updatesAllowed.includes(update));

    if (!isValidOperation) {
        res.status(400).send({
            error: 'Invalid updates!'
        })
    }

    try {
        const task = await Task.findById(req.params.id);

        updates.forEach(update => task[update] = req.body[update]);
        await task.save();

        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!task) {
            res.status(404).send();
        }

        res.send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Delete Task
router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).send();
        }

        res.send(task);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;