const { promisify } = require("es6-promisify");
const http = require("http");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const morgan = require("morgan");
const routes = require("./routes");
const { errorHandler } = require("./utils");
const config = require("../config");

const app = express();
const server = http.createServer(app);

if (config.logger.httpFormat !== "none") {
  app.use(morgan(config.logger.httpFormat));
}

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

app.use("/api", routes.public);
app.use("/api", routes.private);

app.use(errorHandler);

module.exports = {
  init: promisify(server.listen.bind(server, config.server.port)),
  close: promisify(server.close.bind(server)),
  server
};
