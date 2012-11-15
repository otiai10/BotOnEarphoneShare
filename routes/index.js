/**
 * index.js
**/
var proc_tryFav = require('../process/tryFav.js').tryFav;

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
