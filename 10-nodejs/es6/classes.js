class Animal
{
  constructor(name)
  {
    this.name = name
  }

  getName()
  {
    return this.name
  }
}

var a1 = new Animal('simba')
var a2 = new Animal('zoidberg')
console.log(a2.getName())

// // factory or module pattern
// function animalMaker(name)
// {
//   var name = name
//   return {
//     getName: () => name
//   }
// }
