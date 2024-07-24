import {ToDo, Project} from "./functions.js";

console.log('testing 1 2 3')

let testTD1 = new ToDo('Test1 ToDo')
console.log(testTD1)
console.log(testTD1.constructor)
let testTD2 = new ToDo('Test ToDo 2')
let testProject1 = new Project('My First Project')


testProject1.addToDo(testTD1)
testProject1.addToDo(testTD2)
console.log(testProject1)

window.testTD1 = testTD1
window.testTD2 = testTD2
window.testProject1 = testProject1
window.ToDo = ToDo