'use strict';

var promise = new Promise(function (resolve, reject) {
    // Your solution here
    Promise.resolve('PROMISE VALUE');
    Promise.reject(new Error('I DID NOT FIRE'));
});

function onReject(error) {
    // Your solution here
    console.log(error.message);
}


promise.then(console.log).catch(onReject);
