var fs = require('fs');
let args = process.argv[2];
let texto = fs.readFileSync(args, "UTF-8");
let arr_str = texto.split('\n');
console.log(arr_str.length-1);
