const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;
        // The resulting iterator object has to have a next method:
        return {
          next() {
            // The result of next has to be an object with the property `done` that states whether or not the iterator is done.
            [pre, cur] = [cur, pre + cur];
            if(pre === max) {
                return { done: true };
            }
            else if (pre % 3 === 0 && pre % 5 === 0) {
                return { done: false, value: 'FizzBuzz' };
            }
            else if (pre % 3 === 0) {
                return { done: false, value: 'Fizz' };
            }
            else if (pre % 5 === 0) {
                return { done: false, value: 'Buzz' };
            }
            else {
                return { done: false, value: pre };
            }
          }
        }
    }
}

for (var n of FizzBuzz) {
    console.log(n);
}