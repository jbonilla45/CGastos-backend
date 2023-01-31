console.log("desde index");
const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

const app = express();

app.listen(process.env.PORT, () => console.log('Server on port:'+process.env.PORT));

// app.listen(4000, () => {
//     console.log("El servidor esta corriendo");
//   });

app.use(express.json());
app.use(cors());

conectarDB();

app.use('/api/gastos', require('./routes/gasto'))
app.use('/api/ingresos', require('./routes/ingreso'))
