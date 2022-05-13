require("dotenv").config();
const debug = require("debug")("mi-primera-api:server:kittenRouters");
const express = require("express");

const router = express.Router();

let kitten = [
  {
    id: 1,
    name: "Lorenzo",
  },
  {
    id: 2,
    name: "Tigretus",
  },
];

router.get("/", (req, res) => {
  debug("Han pedido gatitos");
  res.status(200).json(kitten);
});

router.post(
  "/",
  (req, res, next) => {
    debug("Van a crear un gatito");
    next();
  },
  (req, res) => {
    const kitty = req.body;
    debug(kitty);
    kitten.push(kitty);
    res.status(201).json(kitty);
  }
);

router.delete("/:idKitty", (req, res) => {
  const { idKitty } = req.params;
  debug("Han pedido sacar a un gatito del refugio");
  kitten = kitten.filter((kitty) => kitty.id !== +idKitty);
  res.status(200).json({ msg: "Kitty sacado del refugio" });
});

module.exports = router;
