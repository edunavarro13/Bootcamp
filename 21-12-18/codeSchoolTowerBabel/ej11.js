var inputs = process.argv.slice(2);
var result = inputs.map( (elem) => elem[0] )
    .reduce( (vAnt, vAct) => vAnt + vAct, "" );
console.log(result);