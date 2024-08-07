class Tasks {
    _taskList = {};

    constructor(){
        this._taskList = {};
    };

    createTask(desc = '') {
        const task = new Tasks(desc);
        this._taskList[task.id] = task;
    }

};

module.exports = Tasks;