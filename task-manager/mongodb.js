// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id.id.length, 'id');
// console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(error, 'Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Mike',
    //     age: 38
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }

    //     // ops is an array of documents.
    //     console.log(result.ops, 'result ops');
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'John',
    //         age: 28
    //     },
    //     {
    //         name: 'Jane',
    //         age: 26
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!');
    //     }

    //     // ops is an array of documents.
    //     console.log(result.ops, 'result ops');
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Buy TV',
    //         completed: true
    //     }, {
    //         description: 'Buy Refrigerator',
    //         completed: true
    //     }, {
    //         description: 'Buy Sofa set',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert to documents!');
    //     }

    //     console.log(result.ops);
    // });

    // db.collection('users').findOne({ _id: new ObjectID("627b8e597580fa0fa4cda371") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch.');
    //     }

    //     console.log(user);
    // });

    // db.collection('users').find({ age: 28 }).toArray((error, users) => {
    //     console.log(users)
    // });

    // db.collection('users').find({ age: 28 }).count((error, count) => {
    //     console.log(count)
    // });

    db.collection('tasks').findOne({ _id: new ObjectID('627b8b8d550fc14c44197ebf') }, (error, task) => {
        console.log(task);
    });

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks);
    });
});