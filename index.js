require("dotenv").config();

const initializeServer = require("./server/index");

const port = process.env.CALCULADORA_EXPRESS || 5000;

initializeServer(port);
