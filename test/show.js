/**
 * test for tweeting
**/

var twitter_bot = require('../modules/twitter.js');

var params = {
    id : '267633222240849922',
};

twitter_bot.show(params,function(err,data){
    console.log("=ERROR===========================\n",err);
    console.log("=DATA============================\n",data);
});
