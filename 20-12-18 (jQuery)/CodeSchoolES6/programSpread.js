let userArray = process.argv.slice(2);

let min = Math.min(...userArray);
console.log(`The minimum of [${userArray}] is ${min}`);