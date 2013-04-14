/**
 * index.js
**/
var proc_tryRetweet = require('../process/tryRetweet').tryRetweet;

var FAV_FAILED    = 0;
var FAV_SUCCEEDED = 1;
var FAV_RETWEETED = 2;
var FAV_MENTIONED = 3;

exports.retweet = function(req,res){
    // allow differnt domain
    res.header('Access-Control-Allow-Origin', '*');
    // make params
    var params = {
        id   : req.body.id,
        name : req.body.name,
    };
    // main
    proc_tryRetweet(params, function(response){
        res.send(response);
    });
};

exports.getFavs = function(req,res){
    // allow cross domain
    res.header('Access-Control-Allow-Origin', '*');
    // make params
    var params = {
        page : 2,
    };
    // main
    proc_getFavs(params, function(response){
        console.log('response');
        res.send(response);
    });
};
