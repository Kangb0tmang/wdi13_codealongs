function getFavColor()
{
  return ['dodgerblue', 'springgreen']
}

// var favColors = getFavColor()
var [favColor, anotherFavColor] = getFavColor()
console.log(favColor)
console.log(anotherFavColor)

function getPerson()
{
  return {
    name: 'lucky13',
    age: 13
  }
}
var { name: personName, age: personAge } = getPerson()
console.log(personName)
console.log(personAge)

var { name, age } = getPerson()
console.log(name, age)
