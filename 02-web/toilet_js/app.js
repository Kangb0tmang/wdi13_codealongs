var bowl = document.querySelector('.bowl');
var flushButton = document.querySelector('.flush-button')

var poop = function()
{
   bowl.classList.add('poop');
}

var flush = function()
{
   bowl.classList.remove('poop');
}

bowl.addEventListener('click', poop);
flushButton.addEventListener('click', flush);
