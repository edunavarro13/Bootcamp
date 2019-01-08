var fs = require('fs');
let args = process.argv[2];
let texto = fs.readFile(args, function(error, data) {
    if(error) {
        console.log(error);
    }
    let arr_str = data.toString().split('\n');
    console.log(arr_str.length - 1);
});