const { Router } = require('express');

const { crearPelicula, obtenerPeliculas, actualizarPelicula, eliminarPelicula} = require('../controllers/pelicula');

const router = Router();

router.post('/', crearPelicula);
router.get('/', obtenerPeliculas);
router.put('/:id', actualizarPelicula);
router.delete('/:id', eliminarPelicula);


module.exports = router;