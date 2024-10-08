import {Task, Project, Portfolio} from "./functions.js";
//import format, { formatDate } from 'date-fns';
import {storageAvailable, loadStorageAll, retrieveStoredPortfolioAll} from "./storage.js";

export let myPortfolio = new Portfolio('myPortfolio')

export let storageTest

try {
    storageTest = retrieveStoredPortfolioAll()
    myPortfolio = storageTest
} catch {
    console.log('storage did not work')
}

export function renderSidebar() {
    const sidebar = document.querySelector('.sidebar')

    const sidebarCreationBtns = document.createElement('div')

    const addProjectBtn = document.createElement('button')
    addProjectBtn.textContent = 'Create Project'
    setAddProjectBtn(addProjectBtn)

    sidebarCreationBtns.appendChild(addProjectBtn)

    sidebar.appendChild(sidebarCreationBtns)


    const sidebarTimeFilters = document.createElement('ul')
    const timeOptions = ['Home', 'Due Today', 'Due 1 Week', 'Due 2+ weeks', 'Past Due', 'Completed']

    timeOptions.forEach(item => {
        const timeLink = document.createElement('li')
        timeLink.textContent = item
        sidebarTimeFilters.appendChild(timeLink)
    })


    const projectArray = myPortfolio.getProjectListNames()

    const sidebarProjectList = document.createElement('ul')

    projectArray.forEach(item => {
        const projectLink = document.createElement('li')
        projectLink.textContent = item
        sidebarProjectList.appendChild(projectLink)
    })

    sidebar.appendChild(sidebarTimeFilters)
    sidebar.appendChild(sidebarProjectList)

}

function addProject(myProjectName) {
    const projectObject = myPortfolio.createProject(myProjectName)
    
    refreshWorkspace()
}

function setAddProjectBtn(element) {
    element.addEventListener('click', () => {
        let response = prompt('New project name?')
        if (response.length > 0) {
            addProject(response)
        } else {
            alert('project name was empty!')
        }
        })
    }

function addTask(myTaskName, projectObject) {
    projectObject.createTask(myTaskName)
    refreshWorkspace()
}

function setAddTaskBtn(element, projectObject) {
    element.addEventListener('click', () => {
        let response = prompt('New task name?')
        if (response.length >0) {
            addTask(response, projectObject)
        } else {
            alert('task name was empty!')
        }
        
        })
    }

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

    const projectContainer = document.createElement('div')
    projectContainer.classList.add('projectContainer')

    const project = document.createElement('div')
    project.classList.add('project')
    // project.textContent = projectObject.name

    const projectTitle = document.createElement('span')
    projectTitle.textContent = projectObject.name
    project.appendChild(projectTitle)

    const projectAddTaskBtn = document.createElement('button')
    projectAddTaskBtn.classList.add('projectAddTaskBtn')
    projectAddTaskBtn.classList.add('hiddenForm')
    projectAddTaskBtn.textContent = 'Add Task'
    setAddTaskBtn(projectAddTaskBtn, projectObject)
    project.appendChild(projectAddTaskBtn)


    const form = document.createElement('div')
    form.classList.add('formEditProject')
    form.classList.add('hiddenForm')

    const formContents = renderEditFormProject(projectObject)

    form.appendChild(formContents)

    projectContainer.appendChild(project)
    
    if (projectObject.name !== 'Unassigned') {
        projectContainer.appendChild(form)
    }
    

    setHiddenToggleListener(projectContainer, projectObject)

    workspace.appendChild(projectContainer)

}

export function renderTask(taskObject) {
    const workspace = document.querySelector('.workspace')

    const taskContainer = document.createElement('div')
    taskContainer.classList.add('taskContainer')

    const task = document.createElement('div')
    task.classList.add('task')
    task.textContent = taskObject.name

    const taskPreviewDescription = document.createElement('span')
    taskPreviewDescription.textContent = getPreviewNCharacters(taskObject.description, 25)
    task.appendChild(taskPreviewDescription)

    const taskPreviewDueDate = document.createElement('span')

    if (taskObject.completed) {
        taskContainer.classList.add('completedTask')
        taskPreviewDueDate.textContent = 'Completed'

    } else {
        taskPreviewDueDate.textContent = taskObject.dueDate
        if (taskObject.priority === 'Low') {
            taskContainer.classList.add('lowPriorityTask')
        } else if (taskObject.priority === 'Medium') {
            taskContainer.classList.add('mediumPriorityTask')
        } else if (taskObject.priority === 'High') {
            taskContainer.classList.add('highPriorityTask')
        }
    }

    task.appendChild(taskPreviewDueDate)

    
    const form = document.createElement('div')
    form.classList.add('taskFormContainer')
    form.classList.add('hiddenForm')
    
    const formContents = renderEditFormTask(taskObject)

    form.appendChild(formContents)
    
    taskContainer.appendChild(task)
    taskContainer.appendChild(form)

    setHiddenToggleListener(taskContainer, taskObject)
    setRerenderFormValuesListener(taskContainer, taskObject)
    
    workspace.appendChild(taskContainer)
}

function renderWorkspace() {
    
    myPortfolio.projectList.forEach((project) => {
        renderProject(project)
        const sortedTaskList = project.taskList.sort((a,b) => {
            //checks for task completion, sends them to the very bottom
            if (a.completed && !b.completed) return 1;
            if (!a.completed && b.completed) return -1;
            
            //sets blank dates to the bottom, after completed tasks
            const dateA = a.dueDate ? new Date(a.dueDate) : new Date('9999-12-31')
            const dateB = b.dueDate ? new Date(b.dueDate) : new Date('9999-12-31')
            return dateA - dateB;
        })

        // project.taskList.forEach((task) => {
        sortedTaskList.forEach((task) => {
            //console.log(task)
            renderTask(task)
        })
    })
}

function clearWorkspace() {
    const workspace = document.querySelector('.workspace')

    while (workspace.firstChild) {
        workspace.removeChild(workspace.firstChild)
    }
}

export function refreshWorkspace() {
    //if user has a form open for editing, may want a warning that unsaved progress will be lost
    console.log(myPortfolio)
    console.log('refreshing workspace')
    loadStorageAll(myPortfolio)
    clearWorkspace()
    renderWorkspace()
}

function renderFormValues (element, taskObject) {
    
    element.querySelectorAll('input').forEach((input) => {
        input.value = taskObject[input.id]
    }
)
}

function renderEditFormProject (projectObject) {
    const form = document.createElement('form')
    const formID = 'projectForm_'+projectObject.id
    form.setAttribute('id', formID)

    const formFields = document.createElement('div')
    
    const nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'name')
    nameLabel.textContent = 'Name'

    const name = document.createElement('input')
    name.setAttribute('id', 'name')
    name.setAttribute('type', 'text')
    name.setAttribute('name', 'task_name')
    name.setAttribute('value', projectObject.name)

    formFields.appendChild(nameLabel)
    formFields.appendChild(name)

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

    setProjectFormSubmit(form, projectObject)
    setProjectButtonCancel(form, projectObject, cancelForm)
    setProjectButtonDelete(form, projectObject, deleteForm)
    

    return form
}

function renderEditFormTask (taskObject) {
    const form = document.createElement('form')
    
    const formID = 'taskForm_'+taskObject.id
    form.setAttribute('id', formID)

    const formInputs = document.createElement('div')
    formInputs.classList.add('taskForm')

    
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

    const description = document.createElement('textarea')
    description.setAttribute('id', 'description')
    description.setAttribute('name', 'description')
    description.textContent = taskObject.description

    const dueDateLabel = document.createElement('label')
    dueDateLabel.setAttribute('for', 'dueDate')
    dueDateLabel.textContent = 'Due Date'

    const dueDate = document.createElement('input')
    dueDate.setAttribute('id', 'dueDate')
    dueDate.setAttribute('type', 'date')
    dueDate.setAttribute('name', 'dueDate')
    dueDate.setAttribute('placeholder', 'mm/dd/yyyy')
    dueDate.setAttribute('value', taskObject.dueDate)
    
    const priorityLabel = document.createElement('label')
    priorityLabel.setAttribute('for', 'priority')
    priorityLabel.textContent = 'Priority'

    const priority = document.createElement('select')
    priority.setAttribute('id', 'priority')
    priority.setAttribute('name', 'priority')
    priority.setAttribute('value', taskObject.priority)
    const priorityOptions = ['Low', 'Medium', 'High']
    moveItemTopOfArray(priorityOptions, taskObject.priority)
    priorityOptions.forEach(item => {
        const prioritySelect = document.createElement('option')
        prioritySelect.setAttribute('value', item)
        prioritySelect.textContent = item
        priority.appendChild(prioritySelect)
    })

    const completed = document.createElement('input')
    completed.setAttribute('id', 'completed')
    completed.setAttribute('type', 'checkbox')
    completed.setAttribute('name', 'completed')
    
    completed.setAttribute('value', taskObject.completed)
    if (taskObject.completed) {
        completed.setAttribute('checked', 'checked')
    } else {
        completed.removeAttribute('checked')
    }
   
    const completedLabel = document.createElement('label')
    completedLabel.setAttribute('for', 'completed')
    completedLabel.textContent = "Completed?"

    const projectLabel = document.createElement('label')
    projectLabel.setAttribute('for', 'project')
    projectLabel.textContent = 'Project'
    
    const project = document.createElement('select')
    project.setAttribute('id', 'project')
    project.setAttribute('name', 'project')
    project.setAttribute('value', taskObject.assignedProject.name)
    const projectList = myPortfolio.getProjectListNames()
    moveItemTopOfArray(projectList, taskObject.assignedProject.name)
    projectList.forEach(item => {
        const projectSelect = document.createElement('option')
        projectSelect.setAttribute('value', item)
        projectSelect.textContent = item
        project.appendChild(projectSelect)
    })

    formInputs.appendChild(nameLabel)
    formInputs.appendChild(name)
    formInputs.appendChild(descriptionLabel)
    formInputs.appendChild(description)
    formInputs.appendChild(dueDateLabel)
    formInputs.appendChild(dueDate)
    formInputs.appendChild(priorityLabel)
    formInputs.appendChild(priority)
    formInputs.appendChild(completedLabel)
    formInputs.appendChild(completed)
    formInputs.appendChild(projectLabel)
    formInputs.appendChild(project)

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

    form.appendChild(formInputs)
    form.appendChild(formButtons)

    setTaskFormSubmit(form, taskObject)
    setTaskButtonCancel(form, taskObject, cancelForm)
    setTaskButtonDelete(form, taskObject, deleteForm)


    return form
}

function moveItemTopOfArray(array, item) {
    //given a list of values and an individual value, move the individual value to the beginning
    const index = array.indexOf(item)

    if (index !== -1) {
        array.splice(index,1)
        array.unshift(item)
    }

    return array

}

export function setHiddenToggleListener(element, object) {
    
    if (object.constructor.name == 'Task') {
        const task = element.querySelector('.task')
        const form = element.querySelector('.taskFormContainer')

        task.addEventListener('click', function () {
            form.classList.toggle('hiddenForm')
        })
        
    } else if (object.constructor.name == 'Project') {
        const project = element.querySelector('.project')
        const form = element.querySelector('.formEditProject')

        project.addEventListener('click', function () {
            form.classList.toggle('hiddenForm')
        })
    } else {
        alert('not a valid object to append: ' + object.constructor.name)
    }
}

function setRerenderFormValuesListener(element, object) {
    
    const task = element.querySelector('.task')
    const form = element.querySelector('.taskFormContainer')

    task.addEventListener('click', function () {
        renderFormValues(form, object)
    })
}

export function setTaskFormSubmit(element, taskObject) {

    element.addEventListener('submit', function(event) {
        event.preventDefault()

        element.querySelectorAll('input[type="text"]').forEach((input) => {
            taskObject[input.id] = input.value
        })

        element.querySelectorAll('input[type="date"]').forEach((input) => {
            taskObject[input.id] = input.value
        })

        element.querySelectorAll('textarea').forEach((input) => {
            taskObject[input.id] = input.value
        })

        const selectPriorityElement = element.querySelector('#priority')         
        const selectedPriorityOption = selectPriorityElement.value
        
        taskObject.priority = selectedPriorityOption

        const checkCompletedElement = element.querySelector('#completed')
        if (checkCompletedElement.checked) {
            taskObject.completed = true
        } else {
            taskObject.completed = false
        }

        const selectProjectElement = element.querySelector('#project')
        const selectedProjectOption = selectProjectElement.options[selectProjectElement.selectedIndex].textContent

        const projectObject = myPortfolio.getProjectByName(selectedProjectOption)
        
        taskObject.assignedProject = projectObject

        refreshWorkspace()
        }
    )
}

export function setTaskButtonCancel(element, taskObject, button) {

    button.addEventListener('click', () => {
        renderFormValues(element, taskObject)
        })
    }

export function setTaskButtonDelete(element, taskObject, button) {

    button.addEventListener('click', () => {
        const userResponse = confirm('Are you sure you want to delete?')
        if (userResponse) {
            taskObject.assignedProject.removeTask(taskObject)
            refreshWorkspace()
            alert('element deleted')

        } else {
            alert('deletion canceled')
        }

        })
    }


export function setProjectFormSubmit(element, projectObject) {

    element.addEventListener('submit', function(event) {
        event.preventDefault()

        element.querySelectorAll('input').forEach((input) => {
            projectObject[input.id] = input.value
        })

        refreshWorkspace()
        }
    )
}

export function setProjectButtonCancel(element, projectObject, button) {

    button.addEventListener('click', () => {
        renderFormValues(element, projectObject)
        })
    }

export function setProjectButtonDelete(element, projectObject, button) {

    button.addEventListener('click', () => {
        const userResponse = confirm('Are you sure you want to delete?')
        if (userResponse) {
            myPortfolio.removeProject(projectObject)
            refreshWorkspace()
            alert('element deleted')

        } else {
            alert('deletion canceled')
        }

        })
    }

function getPreviewNCharacters(string, n) {
    if (string.length >0) {
        return string.slice(0,n)+'...'
    }
}
