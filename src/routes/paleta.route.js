const route = require('express').Router();
const controllerPaletas = require('../controllers/paleta.controller');

route.get('/find-paletas', controllerPaletas.findAllPaletasController);
route.get('/paleta/:id', controllerPaletas.findByIdPaletaController);
route.post('/create', controllerPaletas.createPaletaController);
route.put('/update/:id', controllerPaletas.updatePaletaController);
route.delete('/delete/:id', controllerPaletas.deletePaletaController);

exports.module = route;
