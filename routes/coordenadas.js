const { Router } = require("express");
const {
  coordenadasGet,
  coordenadasPost,
  coordenadasPut,
  coordenadasDelete,
} = require("../controllers/coordenadas");

const router = Router();

router.get("/", coordenadasGet);

router.post("/", coordenadasPost);

router.put("/:id", coordenadasPut);

router.delete("/:id", coordenadasDelete);

module.exports = router;
