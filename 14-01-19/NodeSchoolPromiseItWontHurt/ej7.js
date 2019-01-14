'use strict';

var originalPromise = first();

var originalPromise2 = originalPromise.then((valor) => second(valor));


originalPromise2.then(console.log);
