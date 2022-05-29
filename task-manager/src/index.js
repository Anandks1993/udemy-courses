const express = require('express');
require('./db/mongoose');

// Routers
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// Automatically parse incoming JSON to an object.
app.use(express.json());

// Register routers
app.use(userRouter);
app.use(taskRouter);

// Run express app on specified port.
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

const bcrypt = require('bcryptjs');

const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8);

    console.log(password);
    console.log(hashedPassword);

    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log(isMatch);
};

myFunction();