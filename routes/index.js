/**
 * index.js
**/
var proc_tryFav = require('../process/tryFav.js').tryFav;
var proc_getFavs = require('../process/getFavs.js').getFavs;

var FAV_FAILED    = 0;
var FAV_SUCCEEDED = 1;
var FAV_RETWEETED = 2;
var FAV_MENTIONED = 3;

exports.fav = function(req,res){
    // allow differnt domain
    res.header('Access-Control-Allow-Origin', '*');
    // make params
    var params = {
        id   : req.body.id,
        name : req.body.name,
    };
    // main
    proc_tryFav(params, function(response){
        console.log("===== in route/index =====\n", response);
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
