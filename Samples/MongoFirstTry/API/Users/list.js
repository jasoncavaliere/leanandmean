var path = require('path');
var config = require( path.dirname(require.main.filename) + "/appconfig.js")
module.exports=function(req, res) {
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(config.db.mongoBase, function(err, db) {
        var col = db.collection('users');
        col.find().toArray(function(err, items) {
            res.json(items);
            db.close();
        });
    });
};