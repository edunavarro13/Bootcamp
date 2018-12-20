module.exports = function average(...args) {
    // what goes here?
    let reducido = args.reduce((valorAnterior, valorActual, indice, vector) => {
        return valorAnterior + valorActual;
        },
        0);
    return reducido / args.length;
};