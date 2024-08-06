const inquirer = require('inquirer');

const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: '1',
                name: '1. Create a task'
            },
            {
                value: '2',
                name: '2. Show tasks list'
            },
            {
                value: '3',
                name: '3. Show completed tasks',
            },
            {
                value: '4',
                name: '4. Show pending tasks'
            },
            {
                value: '5',
                name: '5. Complete task(s)'
            },
            {
                value: '6',
                name: '6. Delete task'
            },
            {
                value: '0',
                name: '0. Exit'
            }
        ]
    }
];

const inquirerMenu = async () => {
    // console.clear();
    console.log("==============================");
    console.log("     Choose one option        ");
    console.log("==============================\n");

    const {option}= await inquirer.prompt(menuOptions);
    return option;
};

const inquirerPause = async ( ) => {
    console.log('\n');
    const pauseOption = { type: 'input', name: 'pause', message: 'Press Enter key to continue: '};
    const pause = await inquirer.prompt([pauseOption])
    return pause;
};

module.exports = {inquirerMenu, inquirerPause}; 

