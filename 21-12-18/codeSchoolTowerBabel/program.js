var rawArgs = process.argv.slice(2);
var vargs = [];

rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
        if (val !== '') vargs.push(+val);
    });
});

function avg(...args) {
    let aux_args = [...args];
    let reduce_args = aux_args.reduce((valorAnterior, valorActual) => valorAnterior + valorActual,
        0);
        return reduce_args / args.length;
}
// write a function called `avg` here that calculates the average.

console.log(avg(...vargs));