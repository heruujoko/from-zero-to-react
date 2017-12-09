var promiseMustBeString = function (str) {
    console.log('tunggu ya ...');

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

promiseMustBeString("Hello").then(str => {
    console.log('promise adalah string ' + str);

    // jika promise sudah selesai baru jalankan lagi yg lain

    promiseMustBeString(1).then(str => {
        console.log('promise adalah string ' + str);
    }).catch(str => {
        console.log('promise bukan string ' + str);
    })

}).catch(str => {
    console.log('promise bukan string ' + str);
})