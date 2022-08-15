const Paletas = require('../models/Paleta');

/* const findPaletasService = () => {
  return paletas;
}; */

const findAllPaletasService = async () => {
  const paletas = await Paletas.find();
  return paletas;
};

const findByIdPaletaService = async (idParam) => {
  const paleta = await Paletas.findById(idParam);
  return paleta;
};

const createPaletaService = async (newPaleta) => {
  const paletaNew = await Paletas.create(newPaleta);
  return paletaNew;
};

const updatePaletaService = async (id, paletaEdited) => {
  const paletaUpdate = await Paletas.findByIdAndUpdate(id, paletaEdited);
  return paletaUpdate;
};

const deletePaletaService = async (id) => {
  return await Paletas.findByIdAndDelete(id);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
