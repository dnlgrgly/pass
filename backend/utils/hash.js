const bcrypt = require("bcrypt");
const saltRounds = 10;

function hash(plain) {
  return bcrypt.hashSync(plain, saltRounds);
}

function compare(plain, hash) {
  return bcrypt.compareSync(plain, hash);
}

module.exports = {
  hash,
  compare
};
