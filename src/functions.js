 export class Task {

    static idCounter = 0;

    constructor(name, assignedProject = null, description='', dueDate='', priority='Low', status='') {
        
        this.id = ++Task.idCounter;
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.assignedProject = assignedProject;
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
            this._priority = 'Low'
            return;
        }
    }

    get status() {  
        return this._status
    }

    set status(input) {
        return this._status = input
    }

    get assignedProject() {
        return this._assignedProject
    }

    set assignedProject(newProject) {
        if (this._assignedProject) {
            this._assignedProject.removeTask(this);
        }
        if (newProject) {
            //console.log('pushing to task list from task object')
            newProject.assignTask(this)
        }
        this._assignedProject = newProject
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
        //pushes task object into taskList of parent object
        if (object.constructor.name == 'Task') {
            this.taskList.push(object)
        } else {
            alert('not a valid object to append: ' + object.constructor.name)
        }
    }

    createTask(name) {
        //creates a new Task object, assigns to this parent
        let newTask = new Task(name, this)
        // this.assignTask(newTask)  //would be a dup if called here
        return newTask
    }

    removeTask(taskObject) {
        const index = this.taskList.indexOf(taskObject)
        // console.log('removed task index:')
        // console.log(index)
        if (index >-1) {
            this.taskList.splice(index, 1)
            //taskObject.assignedProject = null
        } else {
            console.log('task not found')
            //alert('task not found')
        }

        }
    

    // deleteTaskByExactMatch(object) {
    //     //deletes an object by "exact match" - expects the object to be passed as an argument
    //     //instead of using id or index
    //     this.taskList = this.taskList.filter(obj => obj !== object)
    // }
}

export class Portfolio {
    constructor(name) {
        this.name = 'myPortfolio'
        this.projectList = []
        this.createProject('Unassigned')
    }

    getProjectListNames() {
        return this.projectList.map(item => item['name'])
    }

    getProjectByName(name) {
        const projectSearch = this.projectList.filter(project => project.name === name)
        //needs handling of multiple values? as a just in case?
        return projectSearch[0]
    }

    assignProject(object) {
        if (object.constructor.name == 'Project') {
            this.projectList.push(object)
        } else {
            alert('not a valid object to append: ' + object.constructor.name)
        }
    }

    //should this have a check for dup names?
    createProject(name) {
        let newProject = new Project(name)
        this.assignProject(newProject)
        return newProject
    }

    
   
}
