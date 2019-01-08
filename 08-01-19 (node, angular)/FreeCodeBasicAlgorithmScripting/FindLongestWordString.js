function findLongestWordLength(str) {
    let arr = str.split(' ');
    console.log(arr);
    return arr.reduce((vAnt, vAct) => {
        if (vAct.length > vAnt) {
            return vAct.length;
        } else {
            return vAnt;
        }
    }, 0);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");