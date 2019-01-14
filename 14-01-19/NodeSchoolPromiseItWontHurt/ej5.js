'use strict';

var promise = new Promise(function (fulfill, reject) {
    // Your solution here
    fulfill('PROMISE VALUE');
    reject(new Error('I DID NOT FIRE'));
});

function onReject(error) {
    // Your solution here
    console.log(error.message);
}


promise.then(console.log, onReject);
console.log('MAIN PROGRAM');
