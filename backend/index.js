const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");

const Producto= require("./routes/producto"); // new
const Tienda= require("./routes/tienda"); // new

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/producto", Producto); // new
app.use("/api/tienda", Tienda); // new

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port : ", process.env.PORT) );

dbConnection();
