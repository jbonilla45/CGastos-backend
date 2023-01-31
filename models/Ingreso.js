const mongoose = require("mongoose");
const IngresoShema = mongoose.Schema({
  origen: {
    type: String,
    required: true,
  },
  destino: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  fechaCreacion:{
    type:Date,
    default:Date.now
  }
});
module.exports = mongoose.model("Ingreso", IngresoShema);
