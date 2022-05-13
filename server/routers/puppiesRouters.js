const express = require("express");

const router = express.Router();

router.get("/mummies", (req, res) => {
  res.status(308).json({ msg: "Whatever" });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (id === "carxofesambromesco") {
    res.status(200).json({ msg: "Aquí les tens" });
    return;
  }
  res.status(200).json({ msg: "asdlkjasdlfj" });
});

module.exports = router;
