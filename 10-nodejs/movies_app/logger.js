var logger = function(req, res, next)
{
  // console.log('a request is made');
  console.log(new Date() + req.method + ' request ' + req.path);
  console.log('%s %s request %s', new Date(), req.method + ' request ' + req.path);
  next(); //continue to the next middleware in the pipeline
};

module.exports = logger;
