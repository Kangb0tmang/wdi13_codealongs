var year = 2014;
var getyear = new Date();

if (year === 2015)
{
   console.log("I'm in the present!");
}
else if (year < 2015)
{
   console.log('Whoa! Blast from the past!');
}
else if (getyear > 2015)
{
   console.log('Greetings from the future!');
   console.log(getyear.getFullYear());
}
else
{
   console.log("You aren't from here");
}

// truthy and falsey
// values that are falsey, false, empty string, number 0, undefined, null, NaN(not a number)W
