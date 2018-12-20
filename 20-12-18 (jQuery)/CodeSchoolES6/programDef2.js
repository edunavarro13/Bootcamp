module.exports = function makeImportant(cadena, longitud) {
    // what goes here?
    let final = longitud;
    if(longitud === undefined) {
        final = cadena.length;
    }
    let copia_cadena = "";
    for (let i = 0; i < final; i++) {
        copia_cadena += "!";
    }
    return cadena + copia_cadena;
};