const request = require('request');
module.exports = function curl(url){
  request(url, function(error, response, body){
    console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body);
  });
}
