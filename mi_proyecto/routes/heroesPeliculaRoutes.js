const { Router } = require('express');

const { crearHeroePelicula, obtenerHeroePelicula, eliminarHeroePelicula, actualizarHeroePelicula } = require('../controllers/heroePelicula');

const router = Router();

router.post('/', crearHeroePelicula);
router.get('/', obtenerHeroePelicula);
router.delete('/:id', eliminarHeroePelicula);
router.put('/:id', actualizarHeroePelicula);

module.exports = router;

