require('colors');
const { showMenu, pause } = require('./helpers/messages');
const { inquirerMenu, inquirerPause } = require('./helpers/inquirer');
const Task = require('./models/Task')
const _taskList = require('./models/Tasks');
const Tasks = require('./models/Tasks');

const main = async () => {
    let selectedOpt;
    let pause;

    const tasks = new Tasks();
    do {
        selectedOpt = await inquirerMenu();
         console.log('selected opt: ', {selectedOpt});
        pause = await inquirerPause();
        // const newTask = new Task('Buy food');
        // console.log('-- new task: ', newTask)
        // const tasks = new Tasks();
        // tasks._taskList[newTask.id] = newTask;
        // console.log('--- tasks ', tasks)
        // await pause();

        switch (selectedOpt) {
            case '1':

            break;

            case '2':
                console.log(tasks._taskList);
            break;
        }

    } while (
        selectedOpt !== '0'
    )
}


main();