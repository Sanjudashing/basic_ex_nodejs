const execFile = require("child_process");
const { stderr } = require("process");
// exec("my.bat", (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(stdout);
// });
const child = execFile("node", [cp.js], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
