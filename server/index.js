require("dotenv").config();
const debug = require("debug")("mi-primera-api:server");
const chalk = require("chalk");
const express = require("express");
const morgan = require("morgan");
const { notFoundError, generalError } = require("./middlewares");
const kittenRouter = require("./routers/kittenRouters");
const puppiesRouter = require("./routers/puppiesRouters");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.green(`Server listening on port ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.red("Error on server"));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red(`Port ${port} busy`));
    }
  });
};

app.use(morgan("dev"));
app.use(express.json());

app.use("/kitten", kittenRouter);
app.use("/puppies", puppiesRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = initializeServer;
