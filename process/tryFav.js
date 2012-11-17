/**
 * process for fav
**/
var twitter = require('../modules/twitter.js');

var FAV_FAILED    = 0;
var FAV_SUCCEEDED = 1;
var FAV_RETWEETED = 2;
var FAV_MENTIONED = 3;

var IS_DEBUG = false;

exports.tryFav = function(params, callback){

if(IS_DEBUG){ //-------------------------- DEBUG BLOCK
    callback({ state : FAV_SUCCEEDED }); //fav成功
}else{ //----------------------------- DEBUG BLOCK
    twitter.fav(params.id, function(err,data){
        if(err === null){
            // エラーが無い→fav成功
            callback({ state : FAV_SUCCEEDED }); //fav成功
        }else if(err.data.match('already')){
            // 既にfavってる→Retweet処理
            retweet(params,function(ret){
                if(ret == FAV_RETWEETED){
                    callback({ state : FAV_RETWEETED }); // retweet成功
                }else{
                    callback({ state : FAV_MENTIONED }); // 一応フラグに使わせてもらう
/******************** mention 処理は凍結します **********
                    // Retweetできなかった→mention処理
                    mention(params,function(ret){
                        if(ret == FAV_MENTIONED){
                            callback({ state : FAV_MENTIONED }); // mention成功
                        }else{
                            //もう何もできない
                            callback({ state : FAV_FAILED }); // 失敗したよ
                        }
                    });
********************************************************/
                    callback({ state : FAV_FAILED });
                }
            });
        }else{
            callback({ state : FAV_FAILED }); // 失敗したよ
        }
    });
}//-------------------------------- DEBUG BLOCK
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
            callback(FAV_RETWEETED);
        }else{
            callback(FAV_FAILED);
        }
    });
}

/**
 ** params = {
 **     tweet_id : string,
 **     user_name: string,
 ** }
**/
function mention(params, callback){
    contents  = {
        'status' : '@' + params.name + ' このnowplayingは合計3人からイイネされたよ!!!',
        'in_reply_to_status_id' : params.id,
    };
    twitter.tweet(contents, function(err,data){
        if(err == null){
            callback(FAV_MENTIONED);
        }else{
            callback(FAV_FAILED);
        }
    });
}
