import {Task, Project, Portfolio} from "./functions.js";
import {refreshWorkspace, renderUI, myPortfolio, storageTest} from "./ui.js";
import './style.css';

console.log('initializing')

//window.storageTest = storageTest


// this to demo project creation, task creation, task reassignment
// let p1 = myPortfolio.createProject('named project 1')
// let p2 = myPortfolio.createProject('named project 2')

// let t1 = p1.createTask('mytask1')

// t1.assignedProject = p2

// myPortfolio.getProjectByName('named project 1').createTask('mytask2')

// window.myPortfolio = myPortfolio

//if local storage available, load the localstorage and convert to our portfolio object, else load blank?
//how to fix unassigned tasks

// window.storageTest = storageTest
renderUI()

//refreshWorkspace(myPortfolio)
console.log('here is my portfolio')
console.log(myPortfolio)

console.log('here is storage object')
console.log(storageTest)
window.storageTest = storageTest

refreshWorkspace(myPortfolio)

//localstorage - is the fallback in the right module
//allow only one editor open at a time? focus/blur events
//minimize project 
//sorting tasks within projects, maybe sorting manually projects using arrows
//task form formatting
//sidebar filter functionality (toggle for render mode, different modes either continued as JS funcitons or perhaps something on the portfolio class to get )

