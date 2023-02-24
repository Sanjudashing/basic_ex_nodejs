const EventEmitter = require("events");
// const event = require("events");

const event = new EventEmitter();

// event.on("saymyname", () => {
//   console.log("my name is sanjay");
// });
// event.on("saymyname", () => {
//   console.log("my name is vipul");
// });
// event.on("saymyname", () => {
//   console.log("How are you");
// });
event.on("saymyname", (sc, msg) => {
  console.log(`status code is ${sc} and message is ${msg}`);
});
event.emit("saymyname", 200, "ok");
