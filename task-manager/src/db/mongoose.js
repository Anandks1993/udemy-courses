const mongoose = require('mongoose');
// const validator = require('validator');

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid');
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minLength: 7,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Password cannot contain "password"');
//             }
//         }
//     }
// });

// const me = new User({
//     name: '   Anand   ',
//     email: 'MYEMAIL@MEAD.IO    ',
//     password: 'phone098!'
// });

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error!', error);
// });

// const Tasks = mongoose.model('Tasks', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// });

// const task = new Tasks({
//     description: 'Buy Sofa Set',
//     completed: false
// });

// task.save().then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log('Error!', error);
// });