var sayHi = function(name)
{
  return `hi ${name}`
}

// if only one param and one line in body
var sayHi = name => `hi ${name}`

// if no params
var sayHi = () => `hi kang`

var sayHi = (firstname, lastname) =>
{
  var number = 1 + 1
  return `hi ${firstname} ${lastname}`
}

const languages = ['ruby', 'php', 'js', 'es6']

// es5
const languagesUpcase = languages.map(function(language)
{
  return language.toUpperCase()
})
console.log(languagesUpcase)

// es6
const languagesUpcased = languages.map(language => language.toUpperCase())
console.log(languagesUpcased);
