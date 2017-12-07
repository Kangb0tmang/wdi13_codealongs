// Get all elements within div (sandwich)
// var fruitElemList = document.querySelectorAll('div > *');
//
// fruitElemList.forEach(function(fruitElem)
// {
//    fruitElem.addEventListener('click', function()
//    {
//       console.log(event.target.textContent);
//    })
// })

// Looking for existing parent on the page
var div = document.querySelector('div');

div.addEventListener('click', function(event)
{
   // console.log(event.target);
   // if (event.target.tagName === 'ORANGE')
   // {
      console.log(event.target);
   // }
});

var userFood = document.querySelector('#food');
var userTime = document.querySelector('#time');
var submit = document.querySelector('#submit');
var output = document.querySelector('#output');

var startCooking = function()
{
   var food = function()
   {
      output.textContent = userFood.value + ' are ready!';
   }
   var time = Number(userTime.value) * 1000;
   microwave(food, time);
}

var microwave = function(foodToCook, timeToCook)
{
   setTimeout(foodToCook, timeToCook);
}

submit.addEventListener('click', startCooking);
