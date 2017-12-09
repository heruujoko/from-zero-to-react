console.log('start code');

var prm = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});

prm.then(() => {
    console.log('is promise after 1s');
});

console.log('end code');