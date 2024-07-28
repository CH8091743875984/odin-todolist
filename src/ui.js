export function testRender(inputProject) {
    console.log(inputProject)

    for (let i=0; i<inputProject.todoList.length; i++) {
        console.log(inputProject.todoList[i])
    }
}

//render UI

export function renderUI() {
    const body = document.querySelector('body')

    const container = document.createElement('div')
    container.classList.add('container')
    body.appendChild(container)

    const header = document.createElement('div')
    header.classList.add('header')
    header.textContent = 'ToDo List'
    container.appendChild(header)

    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')
    container.appendChild(sidebar)

    const workspace = document.createElement('div')
    workspace.classList.add('workspace')
    container.appendChild(workspace)

}

export function renderProject() {
    const workspace = document.querySelector('.workspace')

    const project = document.createElement('div')
    project.classList.add('project')
    project.textContent = 'Test Project Title'
    workspace.appendChild(project)
}

export function renderToDo() {
    const workspace = document.querySelector('.workspace')

    const todo = document.createElement('div')
    todo.classList.add('todo')
    todo.textContent = 'Test Todo Title'
    
    const form = document.createElement('div')
    form.classList.add('formEditToDo')
    form.classList.add('hiddenForm')
    form.textContent = 'Test edit form'
    
    const formContents = renderEditFormToDo()

    form.appendChild(formContents)
    
    todo.appendChild(form)



    // todo.appendChild(renderEditFormToDo())
    
    setHiddenToggleListener(todo)
    
    workspace.appendChild(todo)
}

function renderEditFormToDo () {
    const form = document.createElement('form')

    const formFields = document.createElement('div')
    
    const nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'name')
    nameLabel.textContent = 'Name'

    const name = document.createElement('input')
    name.setAttribute('id', 'name')
    name.setAttribute('type', 'text')
    name.setAttribute('name', 'todo_name')

    const descriptionLabel = document.createElement('label')
    descriptionLabel.setAttribute('for', 'description')
    descriptionLabel.textContent = 'Description'

    const description = document.createElement('input')
    description.setAttribute('id', 'description')
    description.setAttribute('type', 'text')
    description.setAttribute('name', 'description')

    const dueDateLabel = document.createElement('label')
    dueDateLabel.setAttribute('for', 'dueDate')
    dueDateLabel.textContent = 'Due Date'

    const dueDate = document.createElement('input')
    dueDate.setAttribute('id', 'dueDate')
    dueDate.setAttribute('type', 'text')
    dueDate.setAttribute('name', 'dueDate')

    const priorityLabel = document.createElement('label')
    priorityLabel.setAttribute('for', 'priority')
    priorityLabel.textContent = 'Priority'

    const priority = document.createElement('input')
    priority.setAttribute('id', 'priority')
    priority.setAttribute('type', 'text')
    priority.setAttribute('name', 'priority')

    const statusLabel = document.createElement('label')
    statusLabel.setAttribute('for', 'status')
    statusLabel.textContent = 'Status'

    const status = document.createElement('input')
    status.setAttribute('id', 'status')
    status.setAttribute('type', 'text')
    status.setAttribute('name', 'status')

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

    form.appendChild(formFields)
    form.appendChild(formButtons)

    return form
}

export function setHiddenToggleListener(element) {
    element.addEventListener('click', function () {
        element.querySelector('.formEditToDo').classList.toggle('hiddenForm')
    }
)}

//render individual to do item



//render expanded to do item for editing

//render sidebar, sectioning for projects and their todos, counters, etc