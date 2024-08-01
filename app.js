const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

// const basis = Number(process.argv[2].substring(8));
const { b, l } = argv;
createFile(b, l)
.then( fileName => console.log(`${fileName} sucessfully created!`))
.catch(err => console.log(err))

// console.log(process.argv)
console.log(argv)
console.log('basis: yargs', argv.b)
console.log('list: yargs', argv.l)
// console.log('limit yargs: ', argv.limit)
// console.log('number yargs', argv.number)