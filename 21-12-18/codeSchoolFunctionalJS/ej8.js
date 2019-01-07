function duckCount() {
    // SOLUTION GOES HERE
    let variable = 0;
    for(let i = 0; i < arguments.length; i++) {
        if(Object.getPrototypeOf(arguments[i]) === Object.prototype && arguments[i].hasOwnProperty('quack')) {
            ++variable;
        }
    }
    return variable;
}

module.exports = duckCount