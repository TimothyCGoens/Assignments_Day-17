
let taskInput = document.getElementById("taskInput")
let addTask = document.getElementById("addTask")
let pendingTasks = document.getElementById("pendingTasks")
let completedTasks = document.getElementById("completedTasks")

//will add a task to pending list
addTask.addEventListener('click',function() {
   
    //creating list element and add it to the DOM
    let tasks = document.createElement('li')
    pendingTasks.appendChild(tasks)

    //create checkbox and add it to the DOM
    let check = document.createElement("input")
    check.setAttribute('type', 'checkbox')

    //create 'p' element to contain input from textbox
    let paragraph = document.createElement('p')
    let newTask = document.createTextNode(taskInput.value)
    paragraph.appendChild(newTask)


    //create a remove button and add it to the DOM
    let btn = document.createElement("button")
    let btntext = document.createTextNode("Remove")
    btn.appendChild(btntext)
    enterTask.appendChild(btn)

    //atttach nodes to li elements
    tasks.appendChild(check)
    tasks.appendChild(paragraph)
    tasks.appendChild(btn)

    //function to check box and move to completed
    check.onclick = function() {
        if (check.checked == true){
          completedTasks.appendChild(tasks) }
        else {
          pendingTasks.appendChild(tasks)
        }

    // function to click remove to remove task isn't working yet
    //btn.addEventListener('click', function() {

        //let removeTask = document.getElementById('li')
        //let container = removeTask.parentNode
        //container.removeChild(removeTask)
    //})

}})


