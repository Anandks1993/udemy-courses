const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non negative');
            }

            resolve(a + b);
        }, 2000);
    });
};

const doWork = async () => {
    const sum = await add(1, 2); // If this fails then it will directly goes to the catch part.
    const sum2 = await add(sum, 97);
    const sum3 = await add(sum2, 50);
    return sum3;
};

doWork().then(res => {
    console.log(res);
}).catch(e => console.log('error', e));