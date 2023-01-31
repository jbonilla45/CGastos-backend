const Ingreso = require("../models/Ingreso");
//create
exports.createIngreso = async (req, res) => {
  try {
    let ingreso;
    let a;
    ingreso = new Ingreso(req.body);
    await ingreso.save();
    res.send(ingreso);
    console.log("se creo el ingreso");
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al crear el ingreso");
  }
};
//read
exports.listIngreso = async (req, res) => {
  try {
    const ingresos = await Ingreso.find();
    res.json(ingresos)
    console.log("se listaron los ingresos");
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al listar los ingresos");
  }
};
//update
exports.updateIngreso = async (req, res) => {
  try {
    const { origen, destino, valor } = req.body;
    let ingreso = await Ingreso.findById(req.params.id);

    if (!ingreso) {
      res.status(404).json({ msg: "no existe el registro" });
    }
    ingreso.origen = origen;
    ingreso.destino = destino;
    ingreso.valor = valor;

    ingreso = await Ingreso.findOneAndUpdate({ _id: req.params.id }, ingreso, {
      new: true,
    });
    res.json(ingreso);
    console.log("se actualizó el ingreso!");
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al actualizar el ingreso");
  }
};

exports.getIngreso = async (req, res) => {
  try {
    let _id = req.params.id;
    let ingreso = await Ingreso.findById(_id);
    if (!ingreso) {
      res.status(404).json({ msg: "no existe el registro" });
    }
    res.json(ingreso);
    console.log("se obtuvo el ingreso!" + _id);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al obtener el ingreso");
  }
};
//delete
exports.deleteIngreso = async (req, res) => {
  try {
    let _id = req.params.id;
    let ingreso = await Ingreso.findById(_id);
    if (!ingreso) {
      res.status(404).json({ msg: "no existe el registro" });
    }
    await Ingreso.findOneAndRemove({ _id: req.params.id });
    res.json(ingreso);
    console.log("se elimino el registro");
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al eliminar el registro");
  }
};
