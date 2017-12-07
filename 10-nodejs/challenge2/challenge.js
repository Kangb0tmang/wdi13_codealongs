// Total hourly rate of false and true
// Average hourly rate of false and true
// Add GST

var hackers = [
  {
    name: 'Jon',
    dangerous: false,
    hourlyRateFee: 100
  },
  {
    name: 'Fiona',
    dangerous: true,
    hourlyRateFee: 220
  },
  {
    name: 'Ryan',
    dangerous: false,
    hourlyRateFee: 70
  }
];

// OP Version
var isHarmless = function(hacker)
{
  return hacker.dangerous === false;
};

var pluckHourlyRate = function(harmlessHacker)
{
  return harmlessHacker.hourlyRateFee;
};

var addGST = function(fee)
{
  var tax = 1.1;
  return fee * tax;
};

var sum = function(accum, fee)
{
  return accum + fee;
};

var total = hackers
  .filter(isHarmless)
  .map(pluckHourlyRate)
  .map(addGST).reduce(sum);
console.log(total);

// // Version 1
// var harmlessHackers = [];
// hackers.forEach(function(hacker)
// {
//   if (hacker.dangerous === false)
//   {
//     harmlessHackers.push(hacker.hourlyRateFee);
//   }
// });
//
// var totalHourlyRateHarmless = harmlessHackers.reduce(function(accum, hourlyRate)
// {
//   var subtotal = (accum + hourlyRate);
//   var tax = 1.1;
//   return (subtotal * tax).toFixed(2);
// });
// console.log('Total hourly rate for harmless hackers: ' + totalHourlyRateHarmless);
//
// var numOfHarmlessHackers = harmlessHackers.length;
// var averageHourlyRateHarmless = (totalHourlyRateHarmless / numOfHarmlessHackers).toFixed(2);
// console.log('Average hourly rate for harmless hackers: ' + averageHourlyRateHarmless);

// // Piping/Pipeline
// var harmlessHackers = hackers.filter(function(hacker)
// {
//   return hacker.dangerous === false;
// });
// console.log(harmlessHackers);
//
// var fees = harmlessHackers.map(function(harmlessHacker)
// {
//   return harmlessHacker.hourlyRateFee;
// });
// console.log(fees);
//
// function addGST(fee)
// {
//   return fee * 1.1;
// }
// var feesWithGST = fees.map(function(fee)
// {
//   return addGST(fee);
// });
// console.log(feesWithGST);
//
// var total = feesWithGST.reduce(function(accum, feeWithGST)
// {
//   return (accum + feeWithGST).toFixed(2);
// });
// console.log(total);
