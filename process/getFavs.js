/**
 * process for get bot favs
**/
var twitter = require('../modules/twitter.js');

exports.getFavs = function(params, callback){
    twitter.getFavs({}, function(err,data){
        callback(data);
    });
};

