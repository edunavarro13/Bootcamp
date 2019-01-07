function largestOfFour(arr) {
    // You can do this!
    var out = [];
    for (var array of arr) {
      var elemAct = -Infinity;
      for (var elem of array) {
        if(elem > elemAct) {
          elemAct = elem;
        }
      }
      out.push(elemAct);
    }
    console.log(out);
    return out;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  `Tambien podria ser
  function largestOfFour(arr) {
    const output = arr.map( 
      subArr =>
        subArr.reduce(  
          (max, num) =>  num > max ? num : max   ,
          -Number.MAX_SAFE_INTEGER
          ) 
      )
    return output;
  }`