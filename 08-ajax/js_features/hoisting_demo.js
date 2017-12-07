// console.log(magic);
// var magic = 'science';

if ("a" in window)
{
  var a = 1;
}
console.log(a);

doSomething();

// function declaration
function doSomething()
{
  console.log('doing something');
}

console.log(bam);

// function expression
var bam = function(input)
{
  console.log(fruit);
  var fruit = 'banana';
};

doSomething(bam, 'abc');

addEventListener('click', bam);
