const { createFile } = require('./helpers/multiply');


const basis = 21;
createFile(basis)
.then( fileName => console.log(`${fileName} sucessfully created!`))
.catch(err => console.log(err))