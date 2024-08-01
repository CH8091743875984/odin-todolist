import {Task, Project, Portfolio} from "./functions.js";

export function renderSidebar() {
    const sidebar = document.querySelector('.sidebar')

    const sidebarCreationBtns = document.createElement('div')

    const addProjectBtn = document.createElement('button')
    addProjectBtn.textContent = 'Create Project'
    setAddProjectBtn(addProjectBtn)

    const addTaskBtn = document.createElement('button')
    addTaskBtn.textContent = 'Create Task'
    setAddTaskBtn(addTaskBtn)

    sidebarCreationBtns.appendChild(addProjectBtn)
    sidebarCreationBtns.appendChild(addTaskBtn)

    sidebar.appendChild(sidebarCreationBtns)

}

function addProject(myProjectName) {
    const projectObject = myPortfolio.createProject(myProjectName)
    renderProject(projectObject)
}

function setAddProjectBtn(element) {
    element.addEventListener('click', () => {
        let response = prompt('New project name?')
        addProject(response)
        })
    }

function addTask(myTaskName) {
    const projectObject = myPortfolio.getProjectByName('Unassigned')
    const taskObject = projectObject.createTask(myTaskName)
    renderTask(taskObject)
}

function setAddTaskBtn(element) {
    element.addEventListener('click', () => {
        let response = prompt('New task name?')
        addTask(response)
        })
    }


//render UI

export function renderUI() {
    const body = document.querySelector('body')

    const container = document.createElement('div')
    container.classList.add('container')
    body.appendChild(container)

    const header = document.createElement('div')
    header.classList.add('header')
    header.textContent = 'Task List'
    container.appendChild(header)

    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')
    container.appendChild(sidebar)

    const workspace = document.createElement('div')
    workspace.classList.add('workspace')
    container.appendChild(workspace)

    renderSidebar()

}

export function renderProject(projectObject) {
    const workspace = document.querySelector('.workspace')

    const project = document.createElement('div')
    project.classList.add('project')
    project.textContent = projectObject.name
    workspace.appendChild(project)
}

export function renderTask(taskObject) {
    const workspace = document.querySelector('.workspace')

    const taskContainer = document.createElement('div')
    taskContainer.classList.add('taskContainer')

    const task = document.createElement('div')
    task.classList.add('task')
    task.textContent = taskObject.name
    
    const form = document.createElement('div')
    form.classList.add('formEditTask')
    form.classList.add('hiddenForm')
    form.textContent = 'Test edit form'
    
    const formContents = renderEditFormTask(taskObject)

    form.appendChild(formContents)
    
    taskContainer.appendChild(task)
    taskContainer.appendChild(form)

    setHiddenToggleListener(taskContainer)
    setRerenderFormValuesListener(taskContainer, taskObject)
    
    workspace.appendChild(taskContainer)
}

export function renderInitialPortfolio(portfolio) {
    portfolio.projectList.forEach((project) => {
        console.log(project)
        renderProject(project)
        
        console.log(project.taskList)
        project.taskList.forEach((task) => {
            console.log(task)
            renderTask(task)
        })

        //temporary location?
        
    })
}

//myName, myDescription, myDueDate, myPriority, myStatus

function renderFormValues (element, taskObject) {
    
    element.querySelectorAll('input').forEach((input) => {
        input.value = taskObject[input.id]
    }
)
}


function renderEditFormTask (taskObject) {
    const form = document.createElement('form')
    const formID = 'taskForm_'+taskObject.id
    form.setAttribute('id', formID)

    const formFields = document.createElement('div')
    
    const nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'name')
    nameLabel.textContent = 'Name'

    const name = document.createElement('input')
    name.setAttribute('id', 'name')
    name.setAttribute('type', 'text')
    name.setAttribute('name', 'task_name')
    name.setAttribute('value', taskObject.name)

    const descriptionLabel = document.createElement('label')
    descriptionLabel.setAttribute('for', 'description')
    descriptionLabel.textContent = 'Description'

    const description = document.createElement('input')
    description.setAttribute('id', 'description')
    description.setAttribute('type', 'text')
    description.setAttribute('name', 'description')
    description.setAttribute('value', taskObject.description)

    const dueDateLabel = document.createElement('label')
    dueDateLabel.setAttribute('for', 'dueDate')
    dueDateLabel.textContent = 'Due Date'

    const dueDate = document.createElement('input')
    dueDate.setAttribute('id', 'dueDate')
    dueDate.setAttribute('type', 'text')
    dueDate.setAttribute('name', 'dueDate')
    dueDate.setAttribute('value', taskObject.dueDate)

    const priorityLabel = document.createElement('label')
    priorityLabel.setAttribute('for', 'priority')
    priorityLabel.textContent = 'Priority'

    const priority = document.createElement('input')
    priority.setAttribute('id', 'priority')
    priority.setAttribute('type', 'text')
    priority.setAttribute('name', 'priority')
    priority.setAttribute('value', taskObject.priority)


    const statusLabel = document.createElement('label')
    statusLabel.setAttribute('for', 'status')
    statusLabel.textContent = 'Status'

    const status = document.createElement('input')
    status.setAttribute('id', 'status')
    status.setAttribute('type', 'text')
    status.setAttribute('name', 'status')
    status.setAttribute('value', taskObject.status)


    formFields.appendChild(nameLabel)
    formFields.appendChild(name)
    formFields.appendChild(descriptionLabel)
    formFields.appendChild(description)
    formFields.appendChild(dueDateLabel)
    formFields.appendChild(dueDate)
    formFields.appendChild(priorityLabel)
    formFields.appendChild(priority)
    formFields.appendChild(statusLabel)
    formFields.appendChild(status)

    const formButtons = document.createElement('div')

    const saveForm = document.createElement('button')
    saveForm.setAttribute('id', 'save')
    saveForm.setAttribute('type', 'submit')
    saveForm.setAttribute('form', formID)
    saveForm.textContent = 'Save'
   
    const cancelForm = document.createElement('button')
    cancelForm.textContent = 'Cancel'

    const deleteForm = document.createElement('button')
    deleteForm.textContent = 'Delete'

    formButtons.appendChild(saveForm)
    formButtons.appendChild(cancelForm)
    formButtons.appendChild(deleteForm)

    form.appendChild(formFields)
    form.appendChild(formButtons)

    setTaskFormSubmit(form, taskObject)
    setTaskButtonCancel(form, taskObject, cancelForm)
    setTaskButtonDelete(form, taskObject, deleteForm)


    return form
}


export function setHiddenToggleListener(element) {
    
    const task = element.querySelector('.task')
    const form = element.querySelector('.formEditTask')

    task.addEventListener('click', function () {
        form.classList.toggle('hiddenForm')
    }
)}

function setRerenderFormValuesListener(element, object) {
    
    const task = element.querySelector('.task')
    const form = element.querySelector('.formEditTask')

    task.addEventListener('click', function () {
        renderFormValues(form, object)
    })
}

export function setTaskFormSubmit(element, object) {

    element.addEventListener('submit', function(event) {
        event.preventDefault()

        element.querySelectorAll('input').forEach((input) => {
            // console.log(input)
            // console.log(input.id)
            // console.log(input.value)
            object[input.id] = input.value
        })
    })
}

export function setTaskButtonCancel(element, object, button) {

    button.addEventListener('click', () => {
        renderFormValues(element, object)
        })
    }

export function setTaskButtonDelete(element, object, button) {

    button.addEventListener('click', () => {
        const userResponse = confirm('Are you sure you want to delete?')
        if (userResponse) {
            element.parentElement.parentElement.remove()
            alert('element deleted')

            //still need to figure out how to delete a task from the project
            // console.log(object)
            // object = null
            // console.log(object)

        } else {
            alert('deletion canceled')
        }

        
        
        })
    }


export const myPortfolio = new Portfolio('myPortfolio')
// myPortfolio.createProject('Unassigned')

//render individual to do item



//render expanded to do item for editing

//render sidebar, sectioning for projects and their tasks, counters, etc