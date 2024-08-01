const fs = require('fs');

const createFile = (basis, list) => {
    const filePromise = new Promise((resolve, reject) => {
        let output = "";
        let header = `========== ${basis}-table ==========`;
        let footer = "====================================";
        let fileName = `${basis}-table.txt`
        output += header + `\n`;
        for (i = 0 ; i <= 10 ; i++ ) {
            output += `${basis} X ${i} = ${basis*i}\n`
        };
        output += footer + '\n';
        fs.writeFile(fileName , output, (err) => {
            if (err) {
                reject (err)
            } else {
                resolve(fileName)
                if (list) {
                    console.log(output)
                }
            }
        });
    });

    return filePromise;
};

// 
module.exports = { createFile }