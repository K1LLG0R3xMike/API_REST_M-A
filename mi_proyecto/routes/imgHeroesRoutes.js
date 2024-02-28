const { Router } = require('express');
const { crearImgHeroe, obtenerImgHeroe, actualizarImgHeroe, eliminarImgHeroe} = require('../controllers/imgHeroe');

const router = Router();

router.post('/', crearImgHeroe);
router.get('/', obtenerImgHeroe);
router.put('/:id', actualizarImgHeroe);
router.delete('/:id', eliminarImgHeroe);


module.exports = router;
