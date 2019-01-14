'use strict';

function attachTitle(valor) {
    return 'DR. ' + valor;
}

Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log);