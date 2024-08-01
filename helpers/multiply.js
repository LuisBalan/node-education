const fs = require('fs');
const colors = require('colors');


const createFile = (basis, list, until) => {
    const filePromise = new Promise((resolve, reject) => {
        let output = "";
        let header = `========== Multiplication table from ${basis} to ${until} ==========`.rainbow;
        let footer = "====================================================================".rainbow;
        let fileName = `${basis}_multiplication_table_until_${until}.txt`
        output += header + `\n`;
        for (i = 0 ; i <= until ; i++ ) {
            output += `${basis} ${'X'.green} ${i} = ${basis*i}\n`
        };
        output += footer + '\n';
        fs.writeFile(fileName , output, (err) => {
            if (err) {
                reject (err)
            } else {
                if (list === true) {
                    console.log( output )
                }
                resolve(fileName)
            }
        });
    });

    return filePromise;
};

module.exports = { createFile }