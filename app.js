const { createFile } = require('./helpers/multiply');
const argv = require('yargs').argv;


// const basis = Number(process.argv[2].substring(8));
// createFile(basis)
// .then( fileName => console.log(`${fileName} sucessfully created!`))
// .catch(err => console.log(err))

console.log(process.argv)
console.log(argv)
console.log('base: yargs', argv.basis)
console.log('limit yargs: ', argv.limite)