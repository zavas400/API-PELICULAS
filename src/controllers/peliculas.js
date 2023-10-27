const Pelicula = require('./../models/pelicula');
const emptyPelicula = new Pelicula ({
    name: 'vacío',
    synopsis: 'vacío',
    genre: 'vacío',
    duration: 0,
    director: 'vacío',
    actors: 'vacío'
})

class PeliculaController {

    listarPeliculas(req, res){
        console.log("CONTROLLER: Se solicito listar las peliculas");
        Pelicula.find().then(Peliculas => {
            console.log(Peliculas);
            res.json(Peliculas);
        }).catch(e => {
            res.send("No se obtuvieron las peliculas.");
        })
    }
    
    crearPelicula(req, res){
        console.log("CONTROLLER: Se solicito crear una pelicula");
        const newPelicula = new Pelicula({
            name: req.body.name,
            synopsis: req.body.synopsis,
            genre: req.body.genre,
            duration: req.body.duration,
            director: req.body.director,
            actors: req.body.actors.split(',').map(actor => actor.trim())
        });
;

        newPelicula.save().then(savedPelicula => {
            res.send('<script>alert("Se añadió la película bro"); window.location = "/";</script>');
        }).catch(e => {
            res.send('tuve un error:' + e);
        })
    
    }
}

module.exports = new PeliculaController();




