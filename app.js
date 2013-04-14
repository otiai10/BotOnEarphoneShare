
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http');

var app = express();

var port = 4000;
app.configure(function(){
  //app.set('port', process.env.PORT || 3000);
  //app.use(app.router);
  app.use(express.bodyParser());
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.post('/retweet', routes.retweet);

http.createServer(app).listen(port, function(){
  console.log("Express server listening on port " + port);
});
