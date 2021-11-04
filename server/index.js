const chalk = require("chalk");
const debug = require("debug")("calculator:server");
const express = require("express");
const morgan = require("morgan");
const { notFoundErrorHandler, generalErrorHandler } = require("./error");
const suma = require("./routes/suma");
const resta = require("./routes/resta");
const multiplicacion = require("./routes/multiplicacion");
const division = require("./routes/division");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.yellow(`Escuchando en el puerto ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.red("Ha habido un error al iniciar el servidor."));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red(`El puerto ${port} está en uso.`));
    }
  });
};

app.use(morgan("dev"));

app.use("/calculator/suma", suma);
app.use("/calculator/resta", resta);
app.use("/calculator/multiplicacion", multiplicacion);
app.use("/calculator/division", division);

app.use(notFoundErrorHandler);
app.use(generalErrorHandler);

module.exports = initializeServer;
