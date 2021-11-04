const express = require("express");
const debug = require("debug")("calculator:division");

const router = express.Router();
const { division } = require("../calculator");

router.get("/", (req, res) => {
  const { a, b } = { ...req.query };
  debug(a);
  debug(b);
  debug(division(a, b));

  res.json({ a, b, division: division(a, b) });
});

router.use("/", (req, res) => {
  res.json({
    error: true,
    message: "No permitido",
  });
});

module.exports = router;
