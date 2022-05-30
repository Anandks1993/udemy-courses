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
