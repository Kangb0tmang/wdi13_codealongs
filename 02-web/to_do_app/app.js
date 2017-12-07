// Apply to 1 single element
// var lastListItem = document.querySelector('ul > li');
// lastListItem.addEventListener('click', function()
// {
//    lastListItem.classList.add("completed");
// });

// Apply for all items
var listItems = document.querySelectorAll('li');

// Function toggle class when list item is clicked
var toggleComplete = function(event)
{
   event.target.classList.toggle('completed');
}
// toggleComplete(event) is happening behind the scenes (being called for you)

listItems.forEach(function(li)
{
   li.addEventListener('click', toggleComplete);
   // Toggle event works, but have to change in multiple places
   // li.addEventListener('click', function()
   // {
   //    // Toggle to add/remove completed task
   //    // Emulate what a checkbox does
   //    li.classList.toggle('completed');
   // });
});

var addBtn = document.querySelector('.add-button');
var newItemInput = document.querySelector('.new-item');
var toDoList = document.querySelector('ul');

addBtn.addEventListener('click', function()
{
   // Assign whatever is in input box to variable (user input)
   var newItemValue = newItemInput.value;
   // Creating the new item
   var newListItem = document.createElement('li');

   // Assign user input text to new list item
   newListItem.textContent = newItemValue;
   // Add event so user can toggle checkbox item
   newListItem.addEventListener('click', toggleComplete);
   // Toggle event works, but have to change in multiple places
   // newListItem.addEventListener('click', toggleComplete
   // {
   //    newListItem.classList.toggle('completed');
   // });

   // Put list item on <ul>
   toDoList.appendChild(newListItem);
});
