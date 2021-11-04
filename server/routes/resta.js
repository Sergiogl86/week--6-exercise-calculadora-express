const express = require("express");
const debug = require("debug")("calculator:resta");

const router = express.Router();
const { resta } = require("../calculator");

router.get("/", (req, res) => {
  const { a, b } = { ...req.query };
  debug(a);
  debug(b);
  debug(resta(a, b));

  res.json({ a, b, resta: resta(a, b) });
});

router.use("/", (req, res) => {
  res.json({
    error: true,
    message: "No permitido",
  });
});

module.exports = router;
