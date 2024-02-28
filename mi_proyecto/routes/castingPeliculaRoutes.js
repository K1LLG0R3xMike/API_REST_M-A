const { Router } = require('express');

const { crearCastingPelicula, obtenerCastingPelicula, eliminarCastingPelicula, actualizarCastingPelicula } = require('../controllers/castingPelicula');

const router = Router();

router.post('/', crearCastingPelicula);
router.get('/', obtenerCastingPelicula);
router.put('/:id', actualizarCastingPelicula);
router.delete('/:id', eliminarCastingPelicula);

module.exports = router;
