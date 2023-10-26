const router = require('express').Router();
const peliculasController = require('./../src/controllers/peliculas');


router.get('/peliculas', peliculasController.listar);
router.post('/peliculas', peliculasController.crear);

   


module.exports = router;