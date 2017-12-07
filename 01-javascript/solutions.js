// Age Calculator
// Solution 1
var calculateAge = function(birthYear, currentYear) {
 console.log('You are either ' + (currentYear - birthYear) + ' or ' + (currentYear - birthYear - 1));
}

calculateAge(1968, 2017);
calculateAge(2000, 2017);
calculateAge(1900, 2017);

var year = new Date().getFullYear()
calculateAge(1968, year)

//Lifetime Calculator
var maxAge = 80;

var calculateSupply = function(age, amountPerDay) {
 return ((maxAge - age) * 365 * amountPerDay)
}

console.log('You will need ' + calculateSupply(48, 20) + ' until the ripe old age of ' + maxAge);

var pi = 22/7
var calcCircumference = function(radius) {
 return 2 * pi * radius
}

var calcArea = function(radius) {
 return Math.pow(radius,2) * pi
}

var radius = 3;
console.log('The circumference is ' + calcCircumference(3));
console.log('The Area is ' + calcArea(3));

// Solution 2
var CurrYr = new Date().getFullYear();
var min = CurrYr - 100;
var max = CurrYr;
var age;
var i = 0;
// The Age Calculator
function calculateAge(birthYr){
  age = CurrYr - birthYr;
  console.log("You are either "+(age-1)+ " or "+age);
  return age;
}
//The Lifetime Supply Calculator
function calculateSupply(age, amtPerDay){
  var finalYrInLife = 90 - age;
  var supplyToLast = finalYrInLife * amtPerDay;
  console.log("At the age of "+age+" You will need "+ supplyToLast +" of your fav snacks to last you until the ripe old age of 90 if you need " +amtPerDay+ " of snack per day");
}
//calling both functions 3 times
while (i <3){
  var randBirthYr = Math.floor(Math.random() * (max - min + 1)) + min;
  calculateAge(randBirthYr);
  var supplyPerDay = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  calculateSupply(age, supplyPerDay);
  i++;
}

// Solution 3
var born = 1986;
var yearATM = 2017;

var ageGen = function(birthYear) {
  var date = new Date();
  var currentYear = date.getFullYear();
  var ageBDPrior = currentYear - birthYear;
  var ageBDPassed = (currentYear - birthYear) + 1;
  return "you are either " + ageBDPrior + " or " + ageBDPassed;
};


var currentAge = 31;
var appetite = 3.5;
var maxAge = 100;

var calculateSupply = function(age, amountPerDay) {
  var supplyNeeded = (((maxAge - age) * appetite) * 365);
    supplyNeeded = Math.round(supplyNeeded);
    return "You will need " + supplyNeeded + " to last you until the ripe old age of " + maxAge;
}

var enteredRadius = 5;


var calcCircumfrence = function(radius) {
  circAnswer = ((radius * 2) * Math.PI);
  return "The Circumfrence is " + circAnswer;
}

var calcArea = function(radius) {
  areaAnswer = Math.PI * (radius * radius);
  return "The Area is " + areaAnswer;
}

// Geometrizer
// Solution 1
var r = 10;
function calcCircumfrence(r){
  var circumference = 2 * Math.PI * r;
  console.log( "The circumference is " +circumference);
}
function calcArea(r){
  var area = r * r;
  console.log("The area is "+ area);
}
calcCircumfrence (r);
calcArea(r);