 export class Task {

    static idCounter = 0;

    constructor(name, description, dueDate, priority, status) {
        this.id = ++Task.idCounter;
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }

    get name() {
        return this._name
    }

    set name(input) {
        return this._name = input
    }

    get description() {
        return this._description
    }

    set description(input) {
        return this._description = input
    }

    get priority() {
        return this._priority
    }

    set priority(input) {
        const validValues = [null, 'Low', 'Medium', 'High']
        if (validValues.includes(input)) {
            this._priority = input
        }
        else {
            alert('not a valid value')
            return;
        }
    }

    get status() {
        return this._status
    }

    set status(input) {
        return this._status = input
    }
}

export class Project {

    static idCounter = 0;

    constructor(name) {
        this.id = ++Project.idCounter;
        this.name = name;
        this.taskList = [];
    }

    get name() {
        return this._name
    }

    set name(input) {
        return this._name = input
    }
    
    assignTask(object) {
        if (object.constructor.name == 'Task') {
            this.taskList.push(object)
        } else {
            alert('not a valid object to append: ' + object.constructor.name)
        }
    }

    createTask(name) {
        let newTask = new Task(name)
        this.assignTask(newTask)
    }
}

export class Portfolio {
    constructor() {
        this.name = 'myPortfolio'
        this.projectList = []
    }

    assignProject(object) {
        if (object.constructor.name == 'Project') {
            this.projectList.push(object)
        } else {
            alert('not a valid object to append: ' + object.constructor.name)
        }
    }
   
}
