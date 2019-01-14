'use strict';

function alwaysThrows() {
    throw new Error('OH NOES');
}

function onReject(error) {
    // Your solution here
    console.log(error.message);
}

function iterate(num) {
    console.log(num);
    return num + 1;
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate).
catch(onReject);