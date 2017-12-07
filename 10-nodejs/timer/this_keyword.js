// 4 to 5 rules

// how to work the context

// 1. default binding
function doStuff()
{
  console.log(this);
}

var ooooo =
{
  doStuff: doStuff
}
ooooo.doStuff();

// 2. Implicit binding
var boo =
{
  doStuff: function()
  {
    console.log(this);
  }
}
// logs boo variable
boo.doStuff()

// 3. explicit binding
doStuff.call({ haha: 'over here' })
var person = { name: 'me' }
doStuff.apply(person)

// 4. hard binding
var hardStuff = doStuff.bind({ hard: 'core' })
hardStuff()

// 5. puff magic - constructor functions
// returns new object with this bind to it
function Cat()
{
  this.name = 'unicorn'
}
var c1 = new cat()
