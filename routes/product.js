const express = require("express");
const controller = require("../controller/product");

const router = express.Router();

router.post("/", controller.created);

router.get("/", controller.getAll);

router.put("/:id", controller.replace);

router.patch("/:id", controller.update);

router.delete("/:id", controller.deleteOne);

exports.router = router;
