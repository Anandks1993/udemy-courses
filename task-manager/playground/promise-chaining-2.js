require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('628dd713036769bf16c2d526').then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then(result => {
//     console.log(result);
// }).catch(error => {
//     console.log(error);
// });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
};

deleteTaskAndCount('6290803e22869c18fbafda6a').then(count => {
    console.log(count);
}).catch(e => {
    console.log(e);
})