// function countWords(inputWords) {
//     // SOLUTION GOES HERE
//     var obj = new Object();
//     inputWords.reduce(function (vAnt, vAct) {
//         if(obj[vAct] != undefined) {
//             ++obj[vAct];
//         }
//         else {
//             obj[vAct] = 1;
//         }
//     }, '');
//     return obj;
//   }

function countWords(inputWords) {
    return inputWords.reduce((obj, el) => {
        obj[el] = ++obj[el] || 1
        return obj;
    }, {})
}

module.exports = countWords