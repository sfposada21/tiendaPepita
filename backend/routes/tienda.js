const express = require("express");
const router = express.Router(); 
const TiendaController = require ("../controllers/tienda")

// GET POST PUT DELETE
// gttp://localhost:3001/api/role/get

router.post("/registerTienda", TiendaController.registerTienda);
router.get("/listTienda", TiendaController.listTienda);

module.exports = router;
