var path = require('path');
var config = require( path.dirname(require.main.filename) + "/appconfig.js")
module.exports=function(req, res) {
    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect(config.db.mongoBase, function(err, db) {
        var col = db.collection('users');
        console.log(req.params.id);
        col.find( { userId: parseInt(req.params.id)}).toArray(function(err, items) {
            res.json(items);
            db.close();
        });
    });
};