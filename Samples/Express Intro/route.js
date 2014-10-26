


module.exports = function(app){

    var express    = require('express'); 		// call express
    var router = express.Router(); 				// get an instance of the express Router
    router.get('/', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });
    });
    router.get('/users', require('./API/Users/list.js'));
    router.get('/users/:id', require('./API/Users/get.js'));
    app.use('/', router);

}

