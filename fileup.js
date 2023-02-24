const express = require("express");
const formidable = require("formidable");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h2>File upload</h2>
    <form action="/upload" enctype="multipart/form-data" method="post">
     <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
});

app.post("/upload", (req, res, next) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, files) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ files });
  });
});

app.listen(port, () => {
  console.log("Server listening on 3000 port");
});
