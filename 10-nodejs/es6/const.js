const favColor = 'dodgerblue'
console.log(favColor)

const account =
{
  balance: 1000
}

Object.freeze(account)

account.balance = 0
console.log(account.balance)
