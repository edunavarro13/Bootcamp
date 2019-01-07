function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    if(!arr.length) {
        return initial;
    }
    var arrAux = arr.slice(1, arr.length);
    return fn(reduce(arrAux, fn, initial), arr[0]);
}

module.exports = reduce