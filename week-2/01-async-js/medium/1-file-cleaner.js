// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");
fs.writeFile(
  "1-file.txt",
  "hello     world    my    name   is       Anurag",
  () => {
    console.log("file made dirtier");
  }
);
let newData = [];
let newString = "";
fs.readFile("1-file.txt", "utf-8", (err, data) => {
  data = data.trim();
  data = data.replace(/\s+/g, ".");
  // console.log(data);
  newData = data.split(".");
  // console.log(newData);
  newData.forEach((item, index) => {
    newString += item + " ";
  });
  newString = newString.trim();
  // console.log(newString);
  fs.writeFile("1-file.txt", newString, () => {
    console.log("file cleaned");
    console.log(newString);
  });
});
