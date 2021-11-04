const express = require("express");

const router = express.Router();
const debug = require("debug")("calculator:resta");
const { resta } = require("../calculator");

router.get("/", (req, res) => {
  const { a, b } = { ...req.query };
  debug(a);
  debug(b);
  debug(resta(a, b));

  res.json({ a, b, resta: resta(a, b) });
});

module.exports = router;
