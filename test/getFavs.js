/**
 * test for fav
**/

var twitter_bot = require('../modules/twitter.js');

twitter_bot.getFavs({},function(err,data){
    console.log("=ERROR===========================\n",err);
    console.log("=DATA============================\n",data);
});
