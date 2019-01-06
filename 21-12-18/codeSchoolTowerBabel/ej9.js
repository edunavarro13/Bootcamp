const max = process.argv[2];
let FizzBuzz = function* () {
    let pre = 0,
        cur = 1;
    while (pre !== max) {
        // Here we destruct the former state
        [pre, cur] = [cur, pre + cur];
        if (pre % 3 === 0 && pre % 5 === 0) {
            yield 'FizzBuzz';
        } else if (pre % 3 === 0) {
            yield 'Fizz';
        } else if (pre % 5 === 0) {
            yield 'Buzz';
        } else {
            yield pre;
        }
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}