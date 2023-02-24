var crypto = require('crypto');



var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('970b018a02dc23fc01a9a97e1413207a', 'utf8', 'hex')
mystr += mykey.final('utf8');

console.log(mystr); 