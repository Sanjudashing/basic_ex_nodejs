const StringDecoder = require("string_decoder").StringDecoder;
const decoder = new StringDecoder("utf8");
const zlib = require("zlib");

const buf1 = new Buffer("this is best");
const buff = Buffer.from(buf1);
console.log(buff);
// // var deflated = zlib.deflateSync(buf1).toString("base64");
// // var inflated = zlib.inflateSync(new Buffer(deflated, "base64")).toString();

// // console.log(inflated);
// console.log(decoder.write(buf1));

// const buf2 = new Buffer("7eJwrycgsVgCipNTiEgAdWwSD", "hex");
// console.log(decoder.write(buf2));
// var buf = Buffer.from("this is best", "encoding");
// console.log(buf);
