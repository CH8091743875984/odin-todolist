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

//project edit form creation / formatting
//ditch buttons for creating tasks, try having a + symbol for each project, maybe on hover only
//prevent delete of unassigned project
//allow only one editor open at a time? focus/blur events
//task form formatting
//sidebar filter functionality
//task attribute formatting, selection, any visual behavior on workspace
//date package install and formatting
