/**
 * test for tweeting
**/

var twitter_bot = require('../modules/twitter.js');

params = {
    'message' : getTimeStr() + ' this is bot tweet test',
};

twitter_bot.tweet(params,function(err,data){
    console.log("=ERROR===========================\n",err);
    console.log("=DATA============================\n",data);
});

function getTimeStr(){
    time = new Date();
    time_str = zeroPadding(time.getMonth() + 1);
    time_str += '/' + zeroPadding(time.getDate());
    time_str += ' ' + zeroPadding(time.getHours());
    time_str += ':' + zeroPadding(time.getMinutes());
    time_str += ':' + zeroPadding(time.getSeconds());
    console.log(time_str);
    return time_str;
}

function zeroPadding(str){
    return ('00' + str).slice(-2);
}
