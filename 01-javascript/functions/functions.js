// Why use functions?
// repeatability - reuse - flexible
// redaibility
// scalability

// Convert Temperature in C to F
// Formula
// f = (c * (9 /5)) + 32

// Use a function (smaller programs within a bigger program)
// var celciusToFarenheit = function(celcius)
// {
   // Formula to variable
   // Set celcius paramater to something, like setting it as variable
   // var farenheit = celcius * (9 / 5) + 32;
   // Output farenheit variable
   // console.log(farenheit);

   // Return to use it for whatever later
   // return farenheit;
// }

// var temp = 23;
// var tempArray = [24, 34, 12];

// Call the variable, has function assigned to it
// Argument - put in whatever you want
// celciusToFarenheit(prompt("'What's the temperature?"));
// celciusToFarenheit(temp);

// Assign to variable
// var temp = prompt("'What's the temperature?");
// var farenheit = (temp * (9 / 5) + 32);
//
// console.log('farenheit: ' + farenheit);

// The Age Calculator
// var userCurrentYear = parseInt(prompt('Enter your current year'));
// var userBirthYear = parseInt(prompt('Enter your birth year'));
// var calculateAge = function(currentYear, birthYear)
// {
//    var age1 = currentYear - birthYear;
//    var age2 = (currentYear - birthYear) - 1;
//    console.log("You are: " + age1 + " or " + age2 + " years old.");
// }
//
// Put in your current year and birth year
// calculateAge(userCurrentYear, userBirthYear);
//
// // Use Date method
// var year = new Date();
// var currentYear = year.getFullYear();
// calculateAge(currentYear, prompt('Enter your birth year'));

// The Lifetime Supply Calculator
// Maximum age is 81
// You can choose what snacks you like to eat
// var maxAge = 81;
// var snacks = prompt('What snacks do you like to eat?');
// var calculateSupply = function(age, amountPerDay)
// {
//    var lifetimeSnacks = age * amountPerDay;
//    console.log("You will need " + lifetimeSnacks + " " + snacks + " to last you until the ripe old age of " + age);
// }
//
// calculateSupply(maxAge, parseInt(prompt("How many " + snacks + " do you eat a day?'")));
//
// // Accept floating point values for amount per day
// var calculateSupply = function(age, amountPerDay)
// {
//    var lifetimeSnacks = age * amountPerDay;
//    console.log("You will need " + Math.round(lifetimeSnacks) + " " + snacks + " to last you until the ripe old age of " + age);
// }
//
// calculateSupply(maxAge, prompt("How many " + snacks + " do you eat a day?'"));

// The Geometrizer
// Calculate Circumference
// var userNum = parseInt(prompt("What is the radius?"));
// var calcCircle = function(radius)
// {
//    var circumference = 2 * Math.PI * radius;
//    console.log("The circumference is " + circumference);
// }
//
// calcCircle(userNum);
//
// // Calculate Area
// var calcArea = function(radius)
// {
//    var area = userNum * userNum;
//    console.log("The area is " + area);
// }
//
// calcArea(userNum);

// More Functions 1
// var strArray = ["Do", "you", "wanna", "build", "a", "snowman"];
// var lengths = function(strings)
// {
//    var lengthOfElements = [];
//
//    for (var i = 0; i < strings.length; i++)
//    {
//       lengthOfElements.push(strings[i].length);
//    }
//
//    console.log(lengthOfElements);
// }
//
// lengths(strArray);

// Using forEach
// myforEach(list, fn)
// Creating your own forEach
// var numbers = [2, 5, 11];
// var doubleAndLog = function(num)
// {
//    console.log(num * 2);
// }
// // function(arr is first argument, fn is function - doubleAndLog)
// var myForEach = function(arr, fn)
// {
//    // Loop the argument
//    for (var i = 0; i < arr.length; i++)
//    {
//       // Calls doubleAndLog
//       fn(arr[i]);
//    }
// }
//
// // Argument and function (function is line 116)
// myForEach(numbers, doubleAndLog);

// Function 1 but use forEach
// var strArray = ["Do", "you", "wanna", "build", "a", "snowman"];
// var lengths = function(strings)
// {
//    var lengthOfElements = [];
//    // // Assign function to variable
//    // var fn = function(elem)
//    // {
//    //    lengthOfElements.push(elem.length);
//    // }
//    //
//    // // Call function in forEach
//    // strings.forEach(fn);
//
//    // Using another function
//    strings.forEach(function(elem)
//    {
//       lengthOfElements.push(elem.length);
//    });
//
//    // Return length stored in variable
//    return lengthOfElements;
// }
//
// console.log(lengths(strArray));

// More Functions 2
// var transmogrifier = function(num1, num2, powerNum)
// {
//    var numProduct = num1 * num2;
//    var finalNum = Math.pow(numProduct, powerNum);
//    console.log(finalNum);
// }
//
// transmogrifier(2, 3, 4);

// More Functions 3
var phrase = (["doggo wants food", "i want food"]);
var wordReverse = function(words)
{
   var allWords = [];

   // forEach
   words.forEach(function(reverseWords)
   {
      var wordArr = reverseWords.split(" ");
      var reverseWord = wordArr.reverse();
      var wordString = reverseWord.join(" ");
      allWords.push(wordString);
   });

   return allWords;
}

console.log(wordReverse(phrase));
