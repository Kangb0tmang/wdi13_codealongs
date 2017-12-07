console.log('To Do Recap App');
var $todos = ['one', 'two', 'three'];

var $todoInput = $('#new-todo-input');
var $todoBtn = $('#add-todo-btn');
var $todoList = $('#todo-list');
//
// $todoBtn.on('click', function()
// {
//   var $todoValue = $todoInput.val();
//   var $newListItem = $('<li>').text($todoValue);
//   $newListItem.on('click', function(e)
//   {
//     // e.target.classList.add('completed');
//     $(e.target).toggleClass('completed');
//   });
//   $todoList.append($newListItem);
//   $todoInput.val('');
// });
//
// $('ul').on('click', 'li', function(e)
// {
//   $(e.target).toggleClass('completed');
// });

$todoBtn.on('click', function()
{
  $todos.forEach(function(todo)
  {
    var $newListItem = $('<li>').text(todo);
    $todoList.append($newListItem);
  });
});
