function largestOfFour(arr) {
    // You can do this!
    let arr2 = [];
    for(let elemento of arr) {
      arr2.push(elemento.reduce((vAnt, vAct) => {
        if(vAct > vAnt) {
          return vAct;
        } else {
          return vAnt;
        }
      },-Infinity))
    }
    return arr2;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);