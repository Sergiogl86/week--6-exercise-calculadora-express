const express = require("express");
const debug = require("debug")("calculator:suma");

const router = express.Router();
const { suma } = require("../calculator");

router.get("/", (req, res) => {
  const { a, b } = { ...req.query };
  debug(a);
  debug(b);
  debug(suma(a, b));

  res.json({ a, b, suma: suma(a, b) });
});

router.use("/", (req, res) => {
  res.json({
    error: true,
    message: "No permitido",
  });
});

module.exports = router;
