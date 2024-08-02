require('colors');
console.clear();
const { showMenu, pause } = require('./helpers/messages');

const main = async () => {
    let selectedOpt;
    do {
        selectedOpt = await showMenu();

        await pause();
    } while (
        selectedOpt !== '0'
    )
    
}

main();