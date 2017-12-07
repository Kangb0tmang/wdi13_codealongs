function greeting(name)
{
  name = name || 'kang'
  return `hello ${name}`
}

// es6
function greeting(name ='kang')
{
  return `hello ${name}`
}
greeting('lucky13')
console.log(greeting());

function greeting(option = { name: 'lucky13' })
{
  return `hello ${option.name}`
}
greeting({ name: 'kang' })
greeting()
