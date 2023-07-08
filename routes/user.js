const express = require("express");
const controller = require("../controller/user");

const router = express.Router();

router.post("/", controller.create);

router.get("/", controller.getAll);

router.put("/:id", controller.replace);

router.patch("/:id", controller.update);

router.delete("/:id", controller.deleteOne);

exports.router = router;
