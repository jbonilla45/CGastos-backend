const Gasto = require("../models/Gasto");
exports.createGasto = async (req, res) => {
  try {
    let gasto;
    gasto = new Gasto(req.body);
    await gasto.save();
    res.send(gasto);
    console.log("se creo el gasto correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error creando el gasto");
  }
};

exports.listGastos = async (req, res) => {
  try {
    const gastos = await Gasto.find();
    res.json(gastos);
    console.log("se listaron los gastos correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al listar los gastos");
  }
};

exports.updateGasto = async (req, res) => {
  try {
    const {
      descripcion,
      tipo,
      rubro,
      establecimiento,
      valor,
      impuesto,
      descuento,
    } = req.body;
    let gasto = await Gasto.findById(req.params.id);

    if (!gasto) {
      res.status(404).json({ msg: "no existe el registro" });
    }

    gasto.descripcion = descripcion;
    gasto.tipo = tipo;
    gasto.rubro = rubro;
    gasto.establecimiento = establecimiento;
    gasto.valor = valor;
    gasto.impuesto = impuesto;
    gasto.descuento = descuento;

    gasto = await Gasto.findOneAndUpdate({ _id: req.params.id }, gasto, {
      new: true,
    });
    res.json(gasto);

    console.log("se actualizo el gasto");
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al actualizar el gasto");
  }
};

exports.getGasto = async (req, res) => {
  try {
    let gasto = await Gasto.findById(req.params.id);

    if (!gasto) {
      res.status(404).json({ msg: "no existe el registro" });
    }

    res.json(gasto);
    console.log("se obtuvo el registro correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al obtener el registro");
  }
};

exports.deleteGasto = async (req, res) => {
  try {
    let gasto = await Gasto.findById(req.params.id);

    if (!gasto) {
      res.status(404).json({ msg: "no existe el registro" });
    }
    await Gasto.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "gasto eliminado" });
    console.log("se elimino el registro correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al eliminar el registro");
  }
};
