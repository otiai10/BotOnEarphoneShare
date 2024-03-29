/**
 * my module
 * twitter.js
**/

var conf = require('../conf_my.js').conf;

var OAuth = require('oauth').OAuth;
var oauth = new OAuth(
  conf.request_token,
  conf.access_token_app,
  conf.consumer_key,
  conf.consumer_secret,
  conf.oauth_version, // 1.0
  null,
  conf.encryption
);

exports.getFavs = function(params, callback){
  oauth.getProtectedResource(
    conf.favorites_get_api + '/?screen_name=EarphoneShare',
    'GET',
    conf.access_token,
    conf.access_token_secret,
    function(err,data,hoge){
      callback(err,JSON.parse(data),hoge);
    }
  );
}


// favる
exports.fav = function(id, callback){
  // dataで渡すんじゃなくて、叩くurlで渡すのがいいみたい
  var favorites_create_target = conf.favorites_create_api + id + '.json';
  oauth.post(
    favorites_create_target,
    conf.access_token,
    conf.access_token_secret,
    null,
    function(err, data){
      console.log('++ In Module ++ Fav succeeded ++');
      callback(err,data);
    }
  );
};

// tweetする
exports.tweet = function(params, callback){
  oauth.post(
    conf.statuses_update_api,
    conf.access_token,
    conf.access_token_secret,
    params,
    function(err, data){
      console.log("-------------- in modules/twitter.js -------------\n",err,"\n",data);
      callback(err, data);
    }   
  );  
};

// retweetする
exports.retweet = function(params, callback){
  retweet_target_url = conf.statuses_retweet_api + params.id + '.json';
  oauth.post(
    retweet_target_url,
    conf.access_token,
    conf.access_token_secret,
    null,
    function(err, data){
      callback(err, data);
    }   
  );  
}

// これ動かん
exports.show = function(params, callback){
  statuses_show_target = conf.statuses_show_api + params.id + '.json';
  oauth.get(
    statuses_show_target,
    conf.access_token,
    conf.access_token_secret,
    null,
    function(err,data){
      callback(err,data);
    }
  );
};

exports.bot_follow_process = function(params, callback){
  oauth.post(
    conf.friendships_create_api,
    conf.access_token_bot,
    conf.access_token_secret_bot,
    {'screen_name': params.screen_name},
    function(err, data){
      callback(err, data);
    }   
  );  
};
