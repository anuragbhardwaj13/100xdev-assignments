// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.writeFile("write.txt", '["Adding More"]', () => {
  console.log("file written");
});
let z = 0;
for (let i = 0; i < 500; i++) {
  z += i;
}
console.log(z);
fs.readFile("write.txt", "utf-8", (err, data) => {
  console.log(data);
});
let a = 0;
for (let i = 0; i < 10000000; i++) {
  a += i;
}
console.log(a);
