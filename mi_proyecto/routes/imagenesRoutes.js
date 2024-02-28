const { Router } = require('express');

const { crearImagen, obtenerImagen, eliminarImagen, actualizarImagen } = require('../controllers/imagen');

const router = Router();

router.post('/', crearImagen);
router.get('/', obtenerImagen);
router.put('/:id', actualizarImagen);
router.delete('/:id', eliminarImagen);

module.exports = router;