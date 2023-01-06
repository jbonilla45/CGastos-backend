const mongoose = require("mongoose");
const GastoSchema = mongoose.Schema({
  
  descripcion:  {
    type: String,
    required: true
  },
  tipo:  {
    type: String,
    required: true
  },
  rubro:  {
    type: String,
    required: true
  },
  establecimiento:  {
    type: String,
    required: true
  },
  valor:  {
    type: Number,
    required: true
  },
  impuesto: {
    type: Number,
    required: false
  },
  descuento: {
    type: Number,
    required: false
  },
  fechaCreacion:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model("Gasto", GastoSchema);
 