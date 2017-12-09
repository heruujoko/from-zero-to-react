var promiseMustBeString = function (str) {
    return new Promise(function (resolve, reject) {
        // sleep delay selama 1 detik
        setTimeout(function () {
            if (typeof (str) === 'string') {
                resolve(str);
            } else {
                reject(str);
            }
        }, 1000);
    });
}

promiseMustBeString(1).then(str => {
    console.log('promise adalah string ' + str);
}).catch(str => {
    console.log('promise bukan string ' + str);
})

promiseMustBeString("Hello").then(str => {
    console.log('promise adalah string ' + str);
}).catch(str => {
    console.log('promise bukan string ' + str);
})