var inputs = process.argv.slice(2);

var result = inputs.map(element => element[0]).reduce((valorAnterior, valorActual, indice, vector) => {
    return valorAnterior + valorActual;
    },
    "");
console.log(`[${inputs}] becomes "${result}"`);