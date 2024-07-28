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
    todo.appendChild(form)
    
    setHiddenToggleListener(todo)
    
    workspace.appendChild(todo)
}

export function setHiddenToggleListener(element) {
    element.addEventListener('click', function () {
        element.querySelector('.formEditToDo').classList.toggle('hiddenForm')
    }
)}

//render individual to do item



//render expanded to do item for editing

//render sidebar, sectioning for projects and their todos, counters, etc