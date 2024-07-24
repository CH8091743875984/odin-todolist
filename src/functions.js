 export class ToDo {
    constructor(name) {
        this.name = name;
        this.description = null;
        this.dueDate = null;
        this.priority = null;
        this.status = null;
    }

    get name() {
        return this.name
    }

    set name(input) {
        return this._name = input
    }

    get description() {
        return this.description
    }

    set description(input) {
        return this._description = input
    }

    get priority() {
        return this.priority
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

}

export class Project {
    constructor(name) {
        this.name = name;
        this.todoList = [];
    }
    
    addToDo(object) {
        if (object.constructor.name == 'ToDo') {
            this.todoList.push(object)
        } else {
            alert('not a valid object to append: ' + object.constructor.name)
        }

    }
}



