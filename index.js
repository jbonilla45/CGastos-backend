console.log("desde index");
const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

const app = express();

app.listen(4000, () => {
  console.log("El servidor esta corriendo");
});

app.use(express.json());
app.use(cors());

conectarDB();

app.use('/api/gastos', require('./routes/gasto'))