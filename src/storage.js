import {Task, Project, Portfolio} from "./functions.js";


export function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
  
function replacer(key, value) {
    //assignedProject causes circular references; will correct in object creation
    if(key === '_assignedProject') {
        return null
    }

    return value
}

// const stringified = JSON.stringify(portfolioObject, replacer)

export function loadStorageAll (portfolioObject) {
    
    localStorage.clear()

    let storageObject = JSON.stringify(portfolioObject, replacer)
    // storageObject = JSON.parse(storageObject)
    // console.log('here is initial portfolio stringified')
    // console.log(storageObject)

  
    localStorage.setItem('storedPortfolioObject', storageObject)

    
    //return storageObject
}

export function retrieveStoredPortfolioAll () {
    
    // console.log('here is local storage')
    // console.log(localStorage)
    let parsedObject = JSON.parse(localStorage.storedPortfolioObject)
    Object.setPrototypeOf(parsedObject, Portfolio.prototype)
    // console.log('here is the parsed object after prototype set')
    // console.log(parsedObject)

    // console.log('here is getting the project list')

    //you have to redo the IDs of the objects... alternatively reconstruct each object.
    let projectID = 0
    let taskID = 0
    parsedObject.projectList.forEach((projectObject) => {
        //console.log('setting project proto')
        Object.setPrototypeOf(projectObject, Project.prototype)
        projectID = ++projectID
        projectObject.id = projectID

        projectObject.taskList.forEach((taskObject) => {
            //console.log('setting task proto')
            Object.setPrototypeOf(taskObject, Task.prototype)
            //console.log('assigning project to task, from task object')
            taskID = ++taskID
            taskObject.id = taskID
            //underscore was key here, duplicate task creation otherwise
            taskObject._assignedProject = projectObject
        })
    Project.idCounter = projectID
    Task.idCounter = taskID
    })

    return parsedObject
}