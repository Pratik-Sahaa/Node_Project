var crypto = require("crypto");
const fs = require("fs");

var shaHash = "sha1";
var mdHash = "md5";

function getHashValues(filename, callback) {
  s = fs.ReadStream(filename);
  var shaValue = crypto.createHash(shaHash);
  var mdValue = crypto.createHash(mdHash);
  s.on("data", function (data) {
    shaValue.update(data);
    mdValue.update(data);
  });
  s.on("end", function () {
    var shaHash = shaValue.digest("hex");
    var mdHash = mdValue.digest("hex");
    var result = filename + " -> " + shaHash + " -> " + mdHash + "\n";
    callback(result);
  });
}
module.exports = {
  getHashValues: getHashValues,
};