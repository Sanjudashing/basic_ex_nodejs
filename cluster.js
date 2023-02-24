const cluster = require("cluster");
const worker=clustor.fork()
worker.disconnect()

if (cluster.isWorker) {
  console.log("I am a batsman");
  console.log("-->");
} else {
  console.log("I am a master");
//   console.log("-->");
  cluster.fork();
  cluster.fork();

}
