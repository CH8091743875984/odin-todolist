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

    deleteTaskByExactMatch(object) {
        //deletes an object by "exact match" - expects the object to be passed as an argument
        //instead of using id or index
        this.taskList = this.taskList.filter(obj => obj !== object)
    }
}

export class Portfolio {
    constructor(name) {
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

    createProject(name) {
        let newProject = new Project(name)
        this.assignProject(newProject)
        return newProject
    }
   
}
