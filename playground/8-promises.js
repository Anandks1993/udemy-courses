// const doWorkCallback = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('This is my error!');
//         // resolve([1, 2, 3, 4]);
//     }, 2000);
// });

// doWorkCallback.then(res => {
//     console.log('Success!', res);
// }).catch(error => {
//     console.log('Error!', error);
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
};

// add(1, 2).then((sum) => {
//     console.log(sum);

//     add(sum, 3).then(sum2 => {
//         console.log(sum2);
//     }).catch(err => {
//         console.log(err);
//     })
// }).catch((err) => {
//     console.log(err);
// });

// PROMISE CHAINING.
add(1, 2).then(sum => {
    console.log(sum);
    return add(sum, 3);
}).then(sum2 => {
    console.log(sum2);
}).catch(err => {
    console.log(err);
});