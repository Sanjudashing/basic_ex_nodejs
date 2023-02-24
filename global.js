// setInterval(function () {
//   console.log("Hello world");
// }, 10000);

// var recursive = function () {
//   console.log("Hey! 1000 millisecond completed!..");
//   setTimeout(recursive, 1000);
// };
// recursive();
let text = "";
let i = 0;

do {
  setInterval(display, 2500);

  text += i + "<br>";
  i++;
} while (i < 10);
function display() {
  document.getElementById("demo").innerHTML = text;
}
