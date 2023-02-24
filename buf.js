buf = new Buffer(100);
len = buf.write(
  "Simply Easy Learning Simply Easy Learning Simply Easy Learning Simply Easy Learning",
  "utf-8"
);
// console.log("Octets written : " + len);
console.log(buf.toString("utf-8", 0, len));
