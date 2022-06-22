const express = require('express');
require('./db/mongoose');

// Routers
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET request are disabled');
//     } else {
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send('Site currently under maintenance');
// });

// Automatically parse incoming JSON to an object.
app.use(express.json());

// Register routers
app.use(userRouter);
app.use(taskRouter);

// Run express app on specified port.
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
    // const task = await Task.findById('62970c0ea8c2985842b2d0d6');
    // // Below execPopulate() is from older version of mongoose. This is 
    // // removed from v6, it is replaced by the below code.
    // // await task.populate('owner').execPopulate();
    // await task.populate('owner');
    // console.log(task.owner);

    const user = await User.findById('62970b136bc6da2f6f1173f4');
    await user.populate('tasks');
    console.log(user.tasks);
};

main();