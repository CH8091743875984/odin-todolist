import {Task, Project, Portfolio} from "./functions.js";
import {renderInitialPortfolio, renderUI} from "./ui.js";
import './style.css';

console.log('initializing')

let myPortfolio = new Portfolio('myPortfolio')

let myProject = new Project('default_project1')
myPortfolio.assignProject(myProject)

let myTask = new Task('test task name', 'test t1 desc', 'test t1 date', 'Low', 'test t1 status')
myProject.assignTask(myTask)

let myTask2 = new Task('test task name2', 'test t2 desc', 'test t2 date', 'Medium', 'test t2 status')
myProject.assignTask(myTask2)

window.myPortfolio = myPortfolio

renderUI()

renderInitialPortfolio(myPortfolio)

