require('colors');
const { showMenu, pause } = require('./helpers/messages');
const { inquirerMenu, inquirerPause } = require('./helpers/inquirer');

const main = async () => {
    let selectedOpt;
    let pause;
    do {
        selectedOpt = await inquirerMenu();
        // console.log('selected opt: ', {selectedOpt});

        pause = await inquirerPause();
        
    } while (
        selectedOpt !== '0'
    )
}


main();