function BankAccount(startVal)
{
  this.savings = startVal
}

// savings
BankAccount.prototype.withdraw = function(amount)
{
  this.savings = this.savings - amount
}

// deposit
BankAccount.prototype.deposit = function(amount)
{
  this.savings = this.savings + amount
}
