const fs = require('fs')

console.clear();
let output = "";
const multiplicationTable = (number) => {
    for ( let i = 0; i <= 10; i++ ) {
        output += `${number} X ${i} = ${number*i}\n`;
    };
    console.log(output)
    
    fs.writeFile('ten-table.txt', output, (err) => {
        if (err) throw err;
        console.log('File written successfully!', output)
    })
}

multiplicationTable(10)