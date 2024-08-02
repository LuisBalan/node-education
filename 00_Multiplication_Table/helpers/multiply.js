const fs = require('fs');
const colors = require('colors');


const createFile = (basis, list, until) => {
    const filePromise = new Promise((resolve, reject) => {
        let output = "";
        let contentFile = "";
        let headerContentFile = `========== ${basis}-Multiplication table until ${until} ==========`;
        let footerContentFile = "====================================================================";
        let header = `${`========== ${basis}-Multiplication table from  to ${until} ==========`.rainbow}`;
        let footer = `${"====================================================================".rainbow}`;
        let fileName = `./files/${basis}_multiplication_table_until_${until}.txt`
        output += header + `\n`;
        contentFile += headerContentFile + `\n`;
        for (i = 0 ; i <= until ; i++ ) {
            output += `${basis} ${'X'.green} ${i} = ${basis*i}\n`
            contentFile += `${basis} X ${i} = ${basis*i}\n`
        };
        output += footer + '\n';
        contentFile += footerContentFile + '\n';
        fs.writeFile(fileName , contentFile, (err) => {
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