const bcrypt = require('bcrypt');

const saltRounds = 10;

function hash(plain) {
  return bcrypt.hashSync(plain, saltRounds);
}

function compare(plain, hashed) {
  return bcrypt.compareSync(plain, hashed);
}

module.exports = {
  hash,
  compare
};
