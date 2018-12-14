module.exports = function me(req, res) {
  res.send(req.user);
};
