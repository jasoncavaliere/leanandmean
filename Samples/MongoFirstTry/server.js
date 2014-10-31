/**
 * Created by Jason on 10/21/2014.
 */
// server.js
var config = require("./appconfig.js")
var express    = require('express'); 		// call express
var bodyParser = require('body-parser');

var app        = express(); 				// define our app using express

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(config.http.port);

require("./route.js")(app)  //Set up routing

console.log('Server Started on Port: ' + config.http.port);
