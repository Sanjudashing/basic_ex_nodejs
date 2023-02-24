var url = require("url");
var address =
  "http://localhost:8080/default.html?year=2017&month=february&day=2";
var q = url.parse(address, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);
console.log(qdata.day);
