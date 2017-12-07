// counter maker

var counterMaker = function()
{
  var counter = 0;
  return {
    increment: function()
    {
      counter++;
      return counter;
    }
  };
};

var counter = counterMaker();

// function increment()
// {
//   counter++;
// }

// window.counter

// var account =
// {
//   balance: 0,
//   deposit: function(amount) { balance = balance + amount }
// };
//
// account.balance = 'truck loads of money';
//
// // module pattern
//
// var accountMaker = function(initialBalance)
// {
//   var balance = initialBalance || 0;
//   var publicApi =
//   {
//     getBalance: function()
//     {
//       return balance;
//     },
//     desposit: function(amount)
//     {
//       balance = balance + amount;
//     }
//   };
//   return publicApi;
// };
//
// var account = accountMaker(5000);
// account.getBalance();
//
// var myAccount = accountMaker(100000);
//
// // iife
// (function()
// {
//   var eorih
//   var eoig
//   var aeroigheroi
// })()
