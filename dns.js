const dns = require("dns");
// dns.resolveMx("tcs.com", (err, addresses) => {
//   console.log("mx records:%j", addresses);
// });
dns.resolve6("facebook.com", (err, addresses) => {
  console.log(" records:%j", addresses);
});
