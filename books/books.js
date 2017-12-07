var bookShelf =
[
   {
      name: "The Hobbit",
      price: 29.99,
      stock: 5
   },
   {
      name: "The Lord of the Rings",
      price: 24.99,
      stock: 7
   },
   {
      name: "Pride and Prejudice",
      price: 19.99,
      stock: 100
   }
];

// Allow customers to purchase books
var purchase = function(custBook, quantity, custName)
{
   var total = calculateCost(custBook, quantity);
   updateStock(custBook, quantity);
   return displayToCustomer(custBook, quantity, custName, total);
}

var calculateCost = function(custBook, quantity)
{
   var tax = 1.1;
   var totalPrice = custBook.price * quantity * tax;
   return totalPrice;
}

var updateStock = function(custBook, quantity)
{
   bookShelf.forEach(function(book)
   {
      if (book.name === custBook.name)
      {
         book.stock -= quantity
      }
   })
}

var displayToCustomer = function(custBook, quantity, custName, total)
{
   return "Thank you " + custName + " for purchasing a copy of " + custBook.name + ". You purchased " + quantity + " copies, with a total cost of " + total.toFixed(2) + ".";
}

var message = purchase(bookShelf[0], 2, 'Jon');
console.log(message);
