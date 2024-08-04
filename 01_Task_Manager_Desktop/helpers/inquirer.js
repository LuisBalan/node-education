const inquirer = require('inquirer');

const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: ['opt1', 'opt2', 'opt3', '0']
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log("==============================");
    console.log("     Choose one option        ");
    console.log("==============================\n");

    const opt = await inquirer.prompt(menuOptions);
    return opt;
};

module.exports = {inquirerMenu}; 

