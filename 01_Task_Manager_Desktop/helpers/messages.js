require('colors');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const showMenu = () => {

    return new Promise((resolve) => {

        console.clear();
        console.log("==============================");
        console.log("     Choose one option        ");
        console.log("==============================\n");
    
        console.log(`1. Create a task`);
        console.log(`2. Show tasks list`);
        console.log(`3. Show completed tasks`);
        console.log(`4. Show pending tasks`);
        console.log(`5. Complete task(s)`);
        console.log(`6. Delete task`);
        console.log(`0. Exit\n`);
    
        const rl = readline.createInterface({input, output});            
            const answer = rl.question("Choose a option from the menu: ", (opt) => {
                rl.close();
                resolve(opt);
            });
    });

};

const pause = () => {

    return new Promise((resolve) => {
        const rl = readline.createInterface({input, output});
        const answer = rl.question("Press ENTER key to continue: ", () => {
            rl.close();
            console.log('The session has been closed!')
            resolve();
        });
    })
};

module.exports = { showMenu, pause };