const router = require('express').Router();
const peliculasController = require('./../src/controllers/peliculas');

//const bodyParser =require('body-parser');


//router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({extended: true}))
router.get('/peliculas', peliculasController.listarPeliculas);
//router.post('/movies', bodyParser.json(), peliculasController.crearPelicula);
module.exports = router;