'use strict';

var argumento = process.argv[2];

function parsePromised(argumento) {
    return new Promise( (resolve, reject) => {
        try {
            resolve(JSON.parse(argumento));
        } catch (e) {
            reject(e);
        }
    });
}



parsePromised(argumento).then(console.log).catch((e) => console.log(e.message));