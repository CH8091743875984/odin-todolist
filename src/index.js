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


//fix priority deletign the task when set
//finish task form - priority as a dropdown, status as a toggle/checkbox, date with a calendar/date format
//ditch buttons for creating tasks, try having a + symbol for each project, maybe on hover only
//allow only one editor open at a time? focus/blur events
//minimize project 
//completed tasks filter toggle, coloring, keep within their project rather than have a separate bucket
//sorting tasks within projects, maybe sorting manually projects using arrows
//task form formatting
//sidebar filter functionality (toggle for render mode, different modes either continued as JS funcitons or perhaps something on the portfolio class to get )
//task attribute formatting, selection, any visual behavior on workspace
//date package install and formatting
