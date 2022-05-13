const chalk = require("chalk");

require("dotenv").config();
const debug = require("debug")("mi-primera-api:server:middlewares");

const notFoundError = (req, res) => {
  res.status(404);
  res.json({ msg: "Endpoint not found" });
};

// eslint-disable-next-line no-unused-vars
const generalError = (error, req, res, next) => {
  debug(chalk.red(error.message));
  res.status(500).json({ msg: "General pete" });
};

module.exports = {
  notFoundError,
  generalError,
};
