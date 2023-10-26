const Pelicula = require('./../models/pelicula');

class PeliculasController {

    ver(req, res) {
        const id = req.params.id;
        const usuario = ids[id];

        if(usuario) {
            res.send(usuario);
        } else {
            res.sendStatus(404);
        }  
    }

    listar(req, res) {
        Pelicula.find().then(response => {
          console.log('Respuesta: ', response);
          res.send(response);
        }).catch(e => {
          res.sendStatus(500);
          console.log('Error: ', e);
        });
    }

    crear(req, res) {
        res.send(usuarios[0]);
    }


    
}


module.exports = new PeliculasController();

