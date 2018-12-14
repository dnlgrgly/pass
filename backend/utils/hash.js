const crypto = require("crypto");

const SALT_LENGTH = 10;

function generateSalt() {
  return crypto
    .randomBytes(Math.ceil(SALT_LENGTH / 2))
    .toString("hex")
    .slice(0, SALT_LENGTH);
}

function hash(password, salt) {
  return crypto
    .createHmac("sha512", salt)
    .update(password)
    .digest("hex");
}

module.exports = {
  generateSalt,
  hash
};
