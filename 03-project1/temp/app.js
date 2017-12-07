var one = function()
{
   console.log('I am function one');

   two();
}

var two = function()
{
   console.log('I am function two');
}

var three = function(fn)
{
   fn();
}

three(two);
one();
