function findElement(arr, func) {
    let num;
    for (num = 0; num < arr.length; num++) {
      if(func(arr[num])) {
        return arr[num];
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);