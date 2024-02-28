const { Router } = require('express');
const { crearImgPelicula, obtenerImgPelicula, eliminarImgPelicula, actualizarImagenPelicula} = require('../controllers/imgPelicula');

const router = Router();

router.post('/', crearImgPelicula);
router.get('/', obtenerImgPelicula);
router.delete('/:id', eliminarImgPelicula);
router.put('/:id', actualizarImagenPelicula);


module.exports = router;