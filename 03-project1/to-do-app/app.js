// task =
// {
//    name: 'sleep',
//    completed = true
// }

var tasks =
[
   {
      name: 'eat',
      completed: false
   },
   {
      name: 'sleep',
      completed: true
   }
];

var addNewTask = function(name)
{
   var newTask =
   {
      name: name,
      completed: false
   }
   tasks.push(newTask);
}

// =================================
var tasksUL = document.querySelector('.tasks');
var addBtn = document.querySelector('.add-btn');
var newTaskInput = document.querySelector('.new-task-input');

addBtn.addEventListener('click', function()
{
   // get user input
   var newTaskName = newTaskInput.value;
   // add new task
   addNewTask(newTaskName);
   // render
   renderTasks();
});

var renderTasks = function()
{
   // clear list
   tasksUL.innerHTML = '';
   // for each task object inside tasks array
   tasks.forEach(function(task)
   {
      // make a new li
      var newListItem = document.createElement('li');
      newListItem.textContent = task.name;
      // append to taskUL
      tasksUL.appendChild(newListItem);
   })
}

renderTasks();
