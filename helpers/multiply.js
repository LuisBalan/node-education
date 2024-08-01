const fs = require('fs');
const colors = require('colors');


const createFile = (basis, list) => {
    const filePromise = new Promise((resolve, reject) => {
        let output = "";
        let header = `========== ${basis}-table ==========`.rainbow;
        let footer = "====================================".rainbow;
        let fileName = `${basis}-table.txt`
        output += header + `\n`;
        for (i = 0 ; i <= 10 ; i++ ) {
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

// 
module.exports = { createFile }