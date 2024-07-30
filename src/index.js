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

let myProject = new Project('default_project1')
myPortfolio.assignProject(myProject)

let myTask = new Task('test task name', 'test t1 desc', 'test t1 date', 'Low', 'test t1 status')
myProject.assignTask(myTask)

let myTask2 = new Task('test task name2', 'test t2 desc', 'test t2 date', 'Medium', 'test t2 status')
myProject.assignTask(myTask2)

window.myPortfolio = myPortfolio

// testRender(testProject1)


//now need to turn this into creating the classes and prefilling the forms.
renderUI()

renderInitialPortfolio(myPortfolio)

