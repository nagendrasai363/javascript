const fs = require("fs");
const promisifiedReadfile = require("./promisifiedReadfile");

// Using fs.readfile() & callback functions:
fs.readFile("./file1.txt", "utf-8", (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile("./file2.txt", "utf-8", (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  });
});

//Using native promises with out "promisified" version of readfile
let firstSentence;
promisifiedReadfile("./file1.txt", "utf-8")
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile("./file2.txt", "utf-8");
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  })
  .catch((err) => {
    console.log(err);
  });

/*
  Using promisifiedReadfile() again but instead of using the native promise .then() syntax
We declare and invoke a async and await function
  */
async function readFiles() {
  let firstSentence = await promisifiedReadfile("./file1.txt", "utf-8");
  let secondSentence = await promisifiedReadfile("./file2.txt", "utf-8");
  console.log(firstSentence, secondSentence);
}

readFiles();
