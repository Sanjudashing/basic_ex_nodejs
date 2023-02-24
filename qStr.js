const querystring = require("querystring");
const url = require("url");

// const examurl =
//   "http://www.company.com:81/a/b/c.html?user=GEEKSFORGEEKS&year=2021#p2";
// const obj1 = url.parse(examurl);
// console.log("converted object to JSON",obj1);

const q1 = querystring.stringify({ name: "sanju", edu: "MCA", age: 23 });
console.log("converted JSON to object :-", q1);
