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

//render individual to do item



//render expanded to do item for editing

//render sidebar, sectioning for projects and their todos, counters, etc