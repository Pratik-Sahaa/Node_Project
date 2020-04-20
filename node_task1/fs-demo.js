const getHash = require("./hashGenerator.js");
const fs = require("fs");

const args = process.argv.slice(2);
path = args[0];
const res = fs.statSync(path);


if (res.isFile()) {
  dataFromFile(path);
}
if (res.isDirectory()) {
  dataFromDirectory(path);
}


function dataFromDirectory(path) {
  mypath = path;
  fs.readdir(mypath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    files.forEach(function (file) {
      temppath = mypath + "/" + file;
      const givenPath = fs.statSync(temppath);
      if (givenPath.isFile()) {
        dataFromFile(temppath);
      }
      if (givenPath.isDirectory()) {
        dataFromDirectory(temppath);
      }
    });
  });
}
function dataFromFile(filename) {
  getHash.getHashValues(filename, addToFile);
  function addToFile(buff) {
    fs.appendFile("write.txt", buff, function (err) {
      if (err) throw err;
      console.log(filename + " hash saved!");
    });
  }
}