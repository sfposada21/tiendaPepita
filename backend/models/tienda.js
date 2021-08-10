const mongoose = require("mongoose"); 

const tiendaSchema = new mongoose.Schema({
name : String,
direccion : String,
ciudad : String,
date: { type: Date, default: Date.now},
dbStatus: Boolean,
});

const tienda = mongoose.model("tienda",tiendaSchema );
module.exports = tienda;