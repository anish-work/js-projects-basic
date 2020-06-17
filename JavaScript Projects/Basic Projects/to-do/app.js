//Define Variables 
const form = document.querySelector('#task-form');
const taskList = document .querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//Add Event Listeners   
loadEventListeners();

//Load All Event Listeners
function loadEventListeners(){

    document.addEventListener('DOMContentLoaded', getTasks)
    form.addEventListener('submit',addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks)
    filter.addEventListener('keyup',filterTasks)

}


//GET TASKS from LS
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') == null){
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task){
    
    //Create li Element
    const li = document.createElement('li');

    //Add class to li
    li.className = 'collection-item';

    //Append valur to li
    li.appendChild(document.createTextNode(task));

    //Create delete button element
    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="fa fa-remove"></i>';

    //Append delete button to li
    li.appendChild(link)

    taskList.appendChild(li);
    })
}




//Add new Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task') 
}else{
    //Create li Element
    const li = document.createElement('li');
    //Add class to li
    li.className = 'collection-item';
    //Append valur to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create delete button element
    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append delete button to li
    li.appendChild(link)

    taskList.appendChild(li);

    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';
}

    e.preventDefault();
}

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') == null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks))
}



//Remove a particular task
function removeTask(e){
   if(e.target.parentElement.classList.contains('delete-item')){
      if (confirm("Is this task done?"))
    e.target.parentElement.parentElement.remove();

    //Remove Tasks from LS
    removeTaskFromLocalStorage(e.target.parentElement.parentElement)
   }
}


function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') == null){
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

//Remove all tasks
function clearTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }

    localStorage.clear();
}
//Filter the tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    console.log(text);
    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent

            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display= 'block';
            }
            else{
                task.style.display = 'none';
            }
        }
    )
}