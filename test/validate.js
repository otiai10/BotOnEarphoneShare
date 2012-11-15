/**
 * test for validate
**/

var util = require('../modules/util.js');

var string = 'hoge';
console.log(util.validate(string));

var string = '123456789';
console.log(util.validate(string));
