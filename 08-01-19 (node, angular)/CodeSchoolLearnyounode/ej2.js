let args = process.argv.slice(2);
console.log(args.map( elem => Number(elem)).reduce( (vAnt, vAct) => vAnt + vAct,0));