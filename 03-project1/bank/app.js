// var balance = 0;
//
// var deposit = function(amount)
// {
//    balance = balance + amount;
// }

var savings =
{
   // Functions within objects
   // Keys and values
   balance: 0,
   deposit: function()
   {
      savings.balance = savings.balance + amount;
   }
}

//---------------------------
// Presentation Functions
//---------------------------
var balanceDiv = document.querySelector('.balance');
var amountInput = document.querySelector('.amount');
var depositBtn = document.querySelector('.deposit-btn');

var renderBalance = function()
{
   balanceDiv.textContent = '$' + balance;
}

depositBtn.addEventListener('click', function()
{
   // input
   var amount = Number(amountInput.value);
   // process
   savings.deposit(amount);
   // output
   renderBalance();
});

renderBalance();
