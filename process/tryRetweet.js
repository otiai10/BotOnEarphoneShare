/**
 * process for fav
**/
var twitter = require('../modules/twitter.js');

var FAV_FAILED    = 0;
var FAV_SUCCEEDED = 1;
var FAV_RETWEETED = 2;
var FAV_MENTIONED = 3;

var IS_DEBUG = false;

exports.tryRetweet = function(params, callback){
  retweet(params, function(result, data){
    if(result){
      callback(data);
    }else{
      console.log(data);
      callback(false);
    }
  });
};

/**
 ** params = {
 **     tweet_id : string,
 **     user_name: string,
 ** }
**/
function retweet(params, callback){
    twitter.retweet(params, function(err,data){
        if(err == null){
            // Retweet成功
            callback(true, data);
        }else{
            callback(false, err);
        }
    });
}
