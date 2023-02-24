const net = require("net");
const server = net
  .createServer((socket) => {
    socket.end("How are you\n");
  })
  .on("error", (err) => {
    throw err;
  });

server.listen(() => {
  address = server.address();
  console.log("opened server on %j", address);
});
