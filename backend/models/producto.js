const mongoose = require("mongoose"); 

const productoSchema = new mongoose.Schema({
name : String,
description : String,
precio: Number,
codigo: String,
date: { type: Date, default: Date.now},
dbStatus: Boolean,
});

const producto = mongoose.model("producto",productoSchema );
module.exports = producto;