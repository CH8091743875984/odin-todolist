import {Task, Project, Portfolio} from "./functions.js";
import {renderInitialPortfolio, renderUI, renderTask, renderProject} from "./ui.js";
import './style.css';

console.log('testing 1 2 3 4')

// let testTD1 = new ToDo('Test 1 TD')
// let testTD2 = new ToDo('Test 2 TD')
// let testProject1 = new Project('My First Project')

// testProject1.addToDo(testTD1)
// testProject1.addToDo(testTD2)
// // console.log(testProject1)

// window.testTD1 = testTD1
// window.testTD2 = testTD2
// window.testProject1 = testProject1
// window.ToDo = ToDo

let myPortfolio = new Portfolio('myPortfolio')

let myProject = new Project('default_project')
myPortfolio.assignProject(myProject)

let myTask = new Task('default_task')
myProject.assignTask(myTask)

window.myPortfolio = myPortfolio

// testRender(testProject1)


//now need to turn this into creating the classes and prefilling the forms.
renderUI()

renderInitialPortfolio(myPortfolio)

