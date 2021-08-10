const Tienda = require("../models/tienda");

const registerTienda = async (req, res) => {
  if (!req.body.name || !req.body.direccion)
    return res.status(401).send(" Proceso fallido: Infomracion incompleta");

  const existingTienda = await Tienda.findOne({ name: req.body.name });
  if (existingTienda)
    return res.status(401).send("Error: la tienda ya existe");

  const tienda = new Tienda({
    name: req.body.name,
    direccion: req.body.direccion,
    ciudad: req.body.ciudad,
    dbStatus: true,
  });

  const result = await tienda.save();
  if (!result) return res.status(400).send(" Fallo del registro");
  return res.status(200).send({ tienda });
};

const listTienda = async (req, res) => {
  const tienda = await Tienda.find();
  if (!tienda) return res.status(400).send("No role");
  return res.status(200).send({ tienda });
};

module.exports = { registerTienda, listTienda };
