import {ToDo, Project} from "./functions.js";
import {testRender, renderUI, renderToDo, renderProject} from "./ui.js";
import './style.css';

console.log('testing 1 2 3 4')

let testTD1 = new ToDo('Test 1 TD')
// console.log(testTD1)
// console.log(testTD1.constructor)
let testTD2 = new ToDo('Test 2 TD')
let testProject1 = new Project('My First Project')

testProject1.addToDo(testTD1)
testProject1.addToDo(testTD2)
// console.log(testProject1)

window.testTD1 = testTD1
window.testTD2 = testTD2
window.testProject1 = testProject1
window.ToDo = ToDo

testRender(testProject1)

renderUI()

renderProject()
renderToDo()
renderToDo()
renderToDo()
renderProject()
renderToDo()
