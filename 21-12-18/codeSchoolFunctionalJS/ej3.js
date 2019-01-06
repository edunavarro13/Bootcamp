function doubleAll(numbers) {
    // SOLUTION GOES HERE
    var result = [];
    result = numbers.map(function (elemento) {
        return elemento * 2;
    });
    return result
}

module.exports = doubleAll