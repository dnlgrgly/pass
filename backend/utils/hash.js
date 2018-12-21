const bcrypt = require("bcrypt");
const saltRounds = 10;

function hash(plain) {
  bcrypt.hash(plain, saltRounds, function(err, hash) {
    return hash || err;
  });
}

function compare(plain, hash) {
  bcrypt.compare(plain, hash, function(err, res) {
    return res || err;
  });
}

module.exports = {
  hash,
  compare
};
