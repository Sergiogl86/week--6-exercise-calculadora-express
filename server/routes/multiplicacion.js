const express = require("express");
const debug = require("debug")("calculator:multiplicacion");

const router = express.Router();
const { multiplicacion } = require("../calculator");

router.get("/", (req, res) => {
  const { a, b } = { ...req.query };
  debug(a);
  debug(b);
  debug(multiplicacion(a, b));

  res.json({ a, b, multiplicacion: multiplicacion(a, b) });
});

router.use("/", (req, res) => {
  res.json({
    error: true,
    message: "No permitido",
  });
});

module.exports = router;
