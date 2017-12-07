console.log('loops');

for (var i = 0; i <= 100; i++)
{
   if (((i % 3) === 0) && ((i % 5) === 0))
   {
      console.log('CakePudding');
   }
   else if ((i % 3) === 0)
   {
      console.log('Cake');
   }
   else if ((i % 5) === 0)
   {
      console.log('Pudding');
   }
   else
   {
      console.log(i);
   }
}

var secretNumber = 42;
var guess = Number(prompt('enter a number:'));

while (guess !== secretNumber)
{
   if (guess < secretNumber)
   {
      alert('Guess higher');
      var guess = Number(prompt('enter a number:'));
   }
   else if (guess > secretNumber)
   {
      alert('Guess lower');
      var guess = Number(prompt('enter a number:'));
   }

   alert('You guessed correctly');
}
