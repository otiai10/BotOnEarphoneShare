/**
 * test for fav
**/

var twitter_bot = require('../modules/twitter.js');

var params = {
    id : '268321781008461824',
    // https://twitter.com/otiai10/status/268321781008461824
};

twitter_bot.retweet(params,function(err,data){
    console.log("=ERROR===========================\n",err);
    console.log("=DATA============================\n",data);
});
