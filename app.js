const { createFile } = require('./helpers/multiply');


const basis = Number(process.argv[2].substring(8));
createFile(basis)
.then( fileName => console.log(`${fileName} sucessfully created!`))
.catch(err => console.log(err))
