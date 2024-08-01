import {Task, Project, Portfolio} from "./functions.js";
import {renderInitialPortfolio, renderUI, myPortfolio} from "./ui.js";
import './style.css';

console.log('initializing')

let myProject = new Project('default_project1')
myPortfolio.assignProject(myProject)

let myTask = new Task('test task name', 'test t1 desc', 'test t1 date', 'Low', 'test t1 status')
myProject.assignTask(myTask)

let myTask2 = new Task('test task name2', 'test t2 desc', 'test t2 date', 'Medium', 'test t2 status')
myProject.assignTask(myTask2)

window.myPortfolio = myPortfolio

renderUI()

renderInitialPortfolio(myPortfolio)

//to dos - Class: how to remove task objects DOM: task add, project add, project delete ; will we stick with individual element add/create or shoudl we just rerender the whole thing
//will we need IDs on the DOM elements to align with the portfolio object