const logger = require("../models/logger");
const { DUPLICATE_ERROR } = require("../utils/errors");

function catchAsyncErrors(...middlewares) {
  return middlewares.map(middleware => (req, res, next) =>
    Promise.resolve()
      .then(() => middleware(req, res, next))
      .catch(next)
  );
}

function errorHandler(err, req, res, next) {
  logger.error(err.stack);
  if (err.isJoi) {
    res.status(400).send(err.fields);
  } else if (err.code === DUPLICATE_ERROR) {
    res.status(400).send({
      msg: "Forbidden duplicate entries"
    });
  } else {
    const status = err.status || err.statusCode || 500;
    const data = err.data || { msg: "Oops! Something is not right." };
    res.status(status).send(data);
  }
}

module.exports = {
  catchAsyncErrors,
  errorHandler
};
