import {Task, Project, Portfolio} from "./functions.js";
import {refreshWorkspace, renderUI, myPortfolio} from "./ui.js";
import './style.css';

console.log('initializing')

//this to demo project creation, task creation, task reassignment
let p1 = myPortfolio.createProject('named project 1')
let p2 = myPortfolio.createProject('named project 2')

let t1 = p1.createTask('mytask1')

t1.assignedProject = p2

myPortfolio.getProjectByName('named project 1').createTask('mytask2')



// let myTask = new Task('test task name', 'test t1 desc', 'test t1 date', 'Low', 'test t1 status')
// myPortfolio.getProjectByName('named project 1').assignTask(myTask)

// let myTask2 = new Task('test task name2', 'test t2 desc', 'test t2 date', 'Medium', 'test t2 status')
// newProject.assignTask(myTask2)



window.myPortfolio = myPortfolio

renderUI()

refreshWorkspace()

//to dos - Class: how to remove task objects DOM: task add, project add, project delete ; will we stick with individual element add/create or shoudl we just rerender the whole thing
//will we need IDs on the DOM elements to align with the portfolio object