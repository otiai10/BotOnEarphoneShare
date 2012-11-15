/**
 * process test for tryFav
**/

//var twitter_bot = require('../modules/twitter.js');
var proc_tryFav = require('../process/tryFav.js').tryFav;


var params = {
    //id   : '268321781008461824',
    //id   : '268321813279412226',
    //id   : '268192606947782656',
    id : '268332349077479424',
    name : 'carex_field',
};

proc_tryFav(params,function(res){
    console.log("= Proc res ===========================\n",res);
});
