require('colors');
const { showMenu, pause } = require('./helpers/messages');
const { inquirerMenu } = require('./helpers/inquirer');

const main = async () => {
    let selectedOpt;
    do {
        selectedOpt = await inquirerMenu();
        console.log({selectedOpt})
    } while (
        selectedOpt !== '0'
    )
    
}

console.log('testing comment')
console.log('testing comment from newest Windows!')

main();