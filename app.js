console.clear();
const multiplicationTable = (number) => {
    for ( let i = 0; i <= 10; i++ ) {
        console.log(`${number} X ${i} = ${number*i}`);
    };
}

multiplicationTable(3)