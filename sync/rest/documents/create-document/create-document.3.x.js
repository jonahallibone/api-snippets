var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
var authToken = 'your_auth_token';
var Twilio = require('twilio').Twilio;

var client = new Twilio(accountSid, authToken);
var service = client.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

service.documents.create({
  uniqueName: 'MyFirstDocument',
  data: JSON.stringify({ firstName: 'Alice' })
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
