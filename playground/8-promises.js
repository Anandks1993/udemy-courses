const doWorkCallback = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('This is my error!');
        // resolve([1, 2, 3, 4]);
    }, 2000);
});

doWorkCallback.then(res => {
    console.log('Success!', res);
}).catch(error => {
    console.log('Error!', error);
})