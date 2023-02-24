var http = require("http");

var fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname);

http
  .createServer(function (req, res) {
    const fileStream = fs.createReadStream(filePath + "/input.txt", "utf8");

    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });

    const rstream = fs.createWriteStream(filePath + "/output.txt", "utf-8");
    fileStream.pipe(rstream);
    console.log("end the programme");
  })
  .listen(8080);
